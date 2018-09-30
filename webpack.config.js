const path = require('path');
const webpack = require("webpack");
const pro = process.env.NODE_ENV == "production" ? true : false
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 打包css
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// 压缩css
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// 压缩js
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// 图片
const ImageminPlugin = require('imagemin-webpack-plugin').default
// gzip 压缩
const CompressionPlugin = require('compression-webpack-plugin');

//开发环境端口号
const dev_port = "8010"
//更改本地测试环境的地址，可以写localhost，或者写你本地的ip方便手机测试
const url = "localhost"

const entry = pro ? {
    bundle: './src/index.js',
    babelPolyfill: 'babel-polyfill',
    cjs: ['./src/js/globalJs.js', './src/js/msgReducer.js', './src/js/requestUtil.js']
} : [
    './src/index.js',
];


//不同环境加载不同的插件
let plg = [];
if (pro) {
    plg = [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '/src/index.html') // Load a custom template
        }),
        // 打包css
        new MiniCssExtractPlugin({
            filename: "[name].[hash].css",
            chunkFilename: "[id].css"
        }),
        // 压缩css
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.optimize\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: { safe: true, discardComments: { removeAll: true } },
            canPrint: true
        }),
        // 压缩图片
        new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i }),
        // gzip 压缩
        // new CompressionPlugin({
        //     asset: "[path].gz[query]",
        //     algorithm: "gzip",
        //     test: /\.js$|\.css$|\.html$/,
        //     threshold: 10240,
        //     minRatio: 0.8
        // })
    ]


} else {
    plg = [
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
}


module.exports = {
    entry: entry,
    optimization: {
        splitChunks: {
            // 打包 node_modules里的代码
            chunks: "all",         // 必须三选一： "initial" | "all"(默认就是all) | "async"
            minSize: 0,                // 最小尺寸，默认0
            minChunks: 1,              // 最小 chunk ，默认1
            maxAsyncRequests: 1,       // 最大异步请求数， 默认1
            maxInitialRequests: 1,    // 最大初始化请求书，默认1
            name: () => {
            },              // 名称，此选项课接收 function
            cacheGroups: {                 // 这里开始设置缓存的 chunks
                priority: "0",                // 缓存组优先级 false | object |
                cjs: {                   // key 为entry中定义的 入口名称
                    chunks: "all",        // 必须三选一： "initial" | "all" | "async"(默认就是异步)
                    // test: /react|lodash/,     // 正则规则验证，如果符合就提取 chunk
                    name: 'cjs',           // 要缓存的 分隔出来的 chunk 名称
                    minSize: 0,
                    minChunks: 10,
                    enforce: true,
                    maxAsyncRequests: 10,       // 最大异步请求数， 默认1
                    maxInitialRequests: 10,    // 最大初始化请求书，默认1
                    reuseExistingChunk: true   // 可设置是否重用该chunk（查看源码没有发现默认值）
                },
                babelPolyfill:{
                    name: "babelPolyfill",
                    chunks: "initial",
                    minChunks: 2
                }
            }
        },
        // runtimeChunk: true,               // 打包 runtime 代码
        // 默认optimization.minimize是true，所以js可以自动帮你压缩,但是自定义minimizer后，webpack默认配置会取消掉。
        minimizer: [
            new OptimizeCssAssetsPlugin({}), // 压缩 css,使用minimizer会自动取消webpack的默认配置，所以记得用UglifyJsPlugin
            new UglifyJsPlugin({
                // 压缩 js
                uglifyOptions: {
                    ecma: 6,
                    cache: true,
                    parallel: true,
                    output: {
                        // 最紧凑的输出
                        beautify: false,
                        // 去掉注释
                        comments: false
                    },
                    compress: {
                        warnings: false,
                        // 删除conslos.*
                        drop_console: true,
                    },
                }
            })
        ]
    },
    plugins:plg,
    resolve: {
        extensions: ['.js', '.jsx', '.less', '.scss', '.css'],
        modules: [
            path.resolve(__dirname, 'node_modules'),
            path.join(__dirname, './src')
        ],
        alias: {
            // "actions": path.resolve(__dirname, "src/actions"),
            // "components": path.resolve(__dirname, "src/components"),
            // "containers": path.resolve(__dirname, "src/containers"),
            // "reducers": path.resolve(__dirname, "src/reducers"),
            // "utils": path.resolve(__dirname, "src/utils")
        }
    },
    output: {
        filename: pro ? '[name].js' : 'bundle.js',//pro ? '[name].[hash].js' : '[name].js'
        path: path.join(__dirname, 'dist'),
        publicPath: pro ? './' : `http://${url}:${dev_port}/dist/`
    },
    devtool: false,
    module: {
        rules: [{
            test: /\.js?$/,
            exclude: /(node_modules)/,
            use: ['babel-loader']
        }, {
            test: /\.(less|css)$/,
            use: [MiniCssExtractPlugin.loader, {
                loader: 'css-loader?importLoaders=1',
                options: {
                    minimize: true //css压缩
                }
            }, {loader: 'less-loader', options: {javascriptEnabled: true}}]
        }, {
            test: /\.(png|jpg|gif|md)$/,
            use: ['file-loader?limit=10000&name=[md5:hash:base64:10].[ext]']
        }, {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            use: ['url-loader?limit=10000&mimetype=images/svg+xml']
        }, {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "url-loader?limit=10000&mimetype=application/font-woff"
        }, {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "file-loader"
        }, {
            test: /\.json$/,
            use: "json-loader"
        }]
    },
    devServer: {//webpack-dev-server配置热更新以及跨域
        historyApiFallback: true,//不跳转
        noInfo: true,
        inline: true,//实时刷新
        host:url,
        port: dev_port,
        hot: true,
        // proxy: {
        //     '/list': {
        //         target: 'http://lol.qq.com/web201310/js/videodata/LOL_VIDEOLIST_IDX3.js',
        //         pathRewrite: {'^/list': ''},
        //         changeOrigin: true,
        //         secure: false
        //     }
        // }
    }
};