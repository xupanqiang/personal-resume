const path = require('path');
const webpack = require('webpack');
const config = require('config');
// 拆 css
const ExtractTextPlugin = require('mini-css-extract-plugin');
// gzip 压缩
const CompressionPlugin = require('compression-webpack-plugin');
// bundle 大小分析
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// 开发模式
// const DEV = process.env.NODE_ENV === 'development';
// 生产模式
const PROD = process.env.NODE_ENV === 'production';
// 只有在开发模式下启用 source-map
const devtool = PROD ? false : "source-map";
// 指定 filename
const filename = PROD ? '[name].js' : 'bundle.js';
// 提取项目内的公共 js
const entry = PROD ? {
    bundle: './src/index.js',
    babelPolyfill: 'babel-polyfill',
    constants: ['./src/constants/statusCode.js', './src/constants/sysConstants.js', './src/constants/url.js'],
    cjs: ['./src/js/globalJs.js', './src/js/msgReducer.js', './src/js/requestUtil.js', './src/js/sagaUtil.js', './src/js/sysMsgUtil.js', './src/js/uploadUtil.js'],
    area: './src/routes/po/components/Area.js',
    aTable: 'antd/lib/table',
    aDatePicker: 'antd/lib/date-picker'
} : [
    './src/index.js',
];
// 提取项目中 css
const extractCSS = new ExtractTextPlugin({
    filename: 'stylesheets/[name]-one.css',
    allChunks: true
});
// 提取项目中 less
const extractLESS = new ExtractTextPlugin({
    filename: 'stylesheets/[name]-two.css',
    allChunks: true
});
const plugins = PROD ? [
    // 导出 css
    extractCSS,
    // 导出 less
    extractLESS,
    // 提取公共 js
    // new webpack.optimize.CommonsChunkPlugin({
    //     names: ['aDatePicker', 'aTable', 'area', 'cjs', 'constants', 'babelPolyfill'],
    //     filename: "js/CommonsLibs/[name].chunk.js",
    //     minChunks: Infinity
    // }),


    // 丑化js
    // new webpack.optimize.UglifyJsPlugin({
    //     minimize: true,
    //     mangle: false,
    //     output: {
    //         // 最紧凑的输出
    //         beautify: false,
    //         // 去掉注释
    //         comments: false,
    //         screw_ie8: false
    //     },
    //     compress: {
    //         warnings: false,
    //         // 删除conslos.*
    //         drop_console: true,
    //     },
    //     warnings: false
    // }),

    // new webpack.optimize.SplitChunksPlugin({
    //     cacheGroups: {
    //         names: ['aDatePicker', 'aTable', 'area', 'cjs', 'constants', 'babelPolyfill'],
    //         filename: "js/CommonsLibs/[name].chunk.js",
    //         minChunks: Infinity
    //         default: {
    //             minChunks: 2,
    //             priority: -20,
    //             reuseExistingChunk: true,
    //         },
    //         打包重复出现的代码
    //         vendor: {
    //             chunks: 'initial',
    //             minChunks: 2,
    //             maxInitialRequests: 5, // The default limit is too small to showcase the effect
    //             minSize: 0, // This is example is too small to create commons chunks
    //             name: 'vendor'
    //         },
    //         打包第三方类库
    //         commons: {
    //             names: ['aDatePicker', 'aTable', 'area', 'cjs', 'constants', 'babelPolyfill'],
    //             filename: "js/CommonsLibs/[name].chunk.js",
    //             chunks: "initial",
    //             minChunks: Infinity
    //         }
    //     }
    // }),

    new webpack.optimize.RuntimeChunkPlugin({
        name: "manifest"
    }),
    // 设置此模式为生产模式
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
    }),
    // gzip 压缩
    new CompressionPlugin({
        asset: "[path].gz[query]",
        algorithm: "gzip",
        test: /\.js$|\.css$|\.html$/,
        threshold: 10240,
        minRatio: 0.8
    })
    // new BundleAnalyzerPlugin()
] : [
    // 该插件帮助我们安心地使用环境变量
    // 设置此模式为开发模式
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development')
    })
];
const cssIdentName = PROD ? '[hash:base64:10]' : '[path][name]-[local]-[hash:base64:24]';
const cssLoader = PROD ?
    extractCSS.extract({
        fallback: "style-loader",
        use: 'css-loader?localIdentName=' + cssIdentName
    })
    : [
        'style-loader', 'css-loader?localIdentName=' + cssIdentName
    ];
const lessLoader = PROD ?
    extractLESS.extract({
        fallback: "style-loader",
        use: [{
            loader: 'css-loader'
        }, {
            // modifyVars 更改全局样式
            loader: 'less-loader?{modifyVars:{"@primary-color":"#0d85db", "@font-size-base":"12px"}}',
            options: {javascriptEnabled: true}
        }]
    })
    : [
        {
            loader: 'style-loader'
        },
        {
            loader: 'css-loader'
        },
        {
            loader: 'less-loader?{modifyVars:{"@primary-color":"#0d85db", "@font-size-base":"12px"}}',
            options: {javascriptEnabled: true}
        }
    ];

module.exports = {
    devtool: devtool,
    entry: entry,
    output: {
        // 打包文件名
        filename: filename,
        // bundle.js 输出路径,是一个绝对路径
        path: path.join(__dirname, 'dist'),
        // 在 html 页面中需要的导入资源的路径
        publicPath: '/dist/',
        // 设置按需加载 js 的名文件名
        chunkFilename: "[name].[hash:8].chunk.js"
    },
    mode:'development',
    plugins: plugins,
    module: {
        rules: [
            // 解析装载 js
            {
                test: /\.(js|jsx)$/,
                exclude: '/node_modules/',
                loader: 'babel-loader',
                query: {
                    // 加入 antd 模块，并使支持 less
                    // plugins: [
                    //     ['import', [{libraryName: 'antd', style: true}]], // antd 按需引入
                    //     ["transform-decorators-legacy"], // redux @connect
                    // ],
                    cacheDirectory: true,
                },
            },
            // 解析装载图片，等文件
            {
                test: /\.(jpg|gif|png)$/,
                exclude: '/node_modules/',
                // loader: 'file-loader'
                loader: 'url-loader?limit=512&name=[path][name].[ext]?[hash]',
            },
            // 解析装载 css
            {
                test: /\.css$/,
                exclude: '/node_modules/',
                use: cssLoader,
            },
            // 解析装载 less
            {
                test: /\.less$/,
                exclude: '/node_modules/',
                use: lessLoader,

            },
            // 解析 iconfont
            {
                test: /\.(woff|eot|svg|ttf|ppt|pdf|doc)\??.*$/,
                loader: "url-loader?name=fonts/[name].[md5:hash:hex:7].[ext]"
            }
        ]
    },

    // optimization: {
    //     splitChunks: {
    //         chunks: "initial",         // 必须三选一： "initial" | "all"(默认就是all) | "async"
    //         minSize: 0,                // 最小尺寸，默认0
    //         minChunks: 1,              // 最小 chunk ，默认1
    //         maxAsyncRequests: 1,       // 最大异步请求数， 默认1
    //         maxInitialRequests: 1,    // 最大初始化请求书，默认1
    //         name: () => {},              // 名称，此选项课接收 function
    //         cacheGroups: {                 // 这里开始设置缓存的 chunks
    //             priority: "0",                // 缓存组优先级 false | object |
    //             vendor: {                   // key 为entry中定义的 入口名称
    //                 chunks: "initial",        // 必须三选一： "initial" | "all" | "async"(默认就是异步)
    //                 test: /react|lodash/,     // 正则规则验证，如果符合就提取 chunk
    //                 name: "vendor",           // 要缓存的 分隔出来的 chunk 名称
    //                 minSize: 0,
    //                 minChunks: 1,
    //                 enforce: true,
    //                 maxAsyncRequests: 1,       // 最大异步请求数， 默认1
    //                 maxInitialRequests: 1,    // 最大初始化请求书，默认1
    //                 reuseExistingChunk: true   // 可设置是否重用该chunk（查看源码没有发现默认值）
    //             }
    //         }
    //     }
    // },
    // optimization: {
    //     splitChunks: {
    //         text: /react|lodash/,
    //         names: ['aDatePicker', 'aTable', 'area', 'cjs', 'constants', 'babelPolyfill'],
    //         filename: "js/CommonsLibs/[name].chunk.js",
    //         enforce: true,
    //         chunks: "all",
    //         // minChunks: Infinity,
    //         // minimize: true,
    //         // mangle: false,
    //         // output: {
    //         //     // 最紧凑的输出
    //         //     beautify: false,
    //         //     // 去掉注释
    //         //     comments: false,
    //         //     screw_ie8: false
    //         // },
    //         // compress: {
    //         //     warnings: false,
    //         //     // 删除conslos.*
    //         //     drop_console: true,
    //         // },
    //         // warnings: false
    //     }
    // },
    // 剔除的js生产环境时需要从 cdn 引入
    externals: PROD ? {
        'react': 'React',
        'react-dom': 'ReactDOM',
        "react-router": "ReactRouter",
        'redux': 'Redux',
        'react-redux': 'ReactRedux',
        'immutable': 'Immutable',
        'moment': 'moment',
        'moment/locale/zh-cn': 'moment.locale',
    } : {},
    devServer: {
        host: '0.0.0.0',
        port: 8088,
        // hot: true,
        publicPath: '/dist/',
        stats: {
            colors: true
        },
        inline: true,
        // 代理
        /*proxy: {
         '/api': {
         target: 'http://192.168.1.249:8000',
         changeOrigin: true,
         secure: false,
         }
         },*/
        historyApiFallback: true,
        disableHostCheck: true,
        // contentBase: './',
    },
    performance: {
        hints: false,
    },
    cache: false,
};