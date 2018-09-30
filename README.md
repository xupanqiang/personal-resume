


## 总体要求

## 前端目录结构与说明

### 命名要求
1. 所有类(组件)文件遵循大驼峰书写格式。
2. 其余文件遵循小驼峰书写格式。
3. 包名遵循小驼峰书写格式。
4. [其余规范查看。](http://www.jianshu.com/p/d359933374e3)



```
** 代表可选
.
├── dist                        # 文件打包后的存放目录
├── config                      # 项目配置文件目录
└── src                         # 项目源文件目录
    ├── components              # 公共组件目录
    ├── js                      # 全局js公共方法目录
    ├── index.js                # 入口文件   
    ├── routes                  # 主路由和异步路由分割点目录
    │   ├── home                # 业务目录“根据业务自定义名称”目录
    │   │   ├── assets **       # 组件引入的静态资源目录
    │   │   │   └── xxx.png     # *** 图片 json 等文件
    │   │   ├── components      # 业务组件目录
    │   │   │   ├── Home.js     # 业务（组件）文件
    │   │   │   └── home.less   # 业务样式文件
    │   │   ├─ modules **      # actions/constants/reducers/saga的集合目录
    │   │   └── routes **       # 子路由目录
    │   └── index.js            # 路由集合文件
    ├── store                   # Redux指定块目录
    │   ├── createStore.js      # 创建和使用 redux store 文件
    │   ├── reducers.js         # Reducer 注册和注入文件
    │   └── sagas.js            # 合并 各个saga 的文件
    └── styles                  # 公共样式目录

### 涉及到的技术
> react react-router redux immutable webpack axios less antd

#### react
react 是一个前端框架，提供 UI 界面。

#### react-router
与 react 结合提供网站页面导航。

#### redux
管理 react 的状态，react 是由状态驱动页面渲染。

#### immutable
将原生的 js 可变的数据结构，变为不可变的数据结构。在 react 周期函数 `shouldComponentUpdate(nextProps, nextState)`   进行属性和状态的判断，从而进行有选择性的渲染页面。 `shouldComponentUpdate` 方法默认总是返回 `true`。

#### webpack
用于打包项目，拆分业务代码，按需加载等。

#### axios
ajax请求。

#### less
负责处理样式。

#### antd
基于 react 封装的一套 UI 组件。






# 使用方法：
    安装模块：npm install

    开发模式：npm start

    打包：npm run build

    访问地址：http://localhost:8010

# 打包上线
* 将webpack.config.js中的publicPath的 ./ 改成你线上的绝对地址，比如 http://129.0.0.111 之类，然后再执行npm run build
* 打包后直接将dist文件夹提交至你们项目得根目录中
* 命令并且呵斥你们得后端人员，将404指向build/index.html，这样基本就可以愉快得查看了
* 如果在上线后首屏调用速度较慢，这样得情况得话，可以鞭挞后端人员，开启服务器得gzip压缩功能将js压缩一下，压缩后大小基本只有原来得三分之一，这个很实用

```
上线地址：[https://xupanqiang.github.io/resume/](https://xupanqiang.github.io/resume/)