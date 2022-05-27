# 

* 1、使用高版本的Webpack和Node.js
* 2、多进程/多实例构建： HappyPack、Thread-loader
* 3、压缩代码 
    - 多进程并行压缩
    - webpack-paralle-uglify-pluginuglifyjs-webpack-plugin 开启 parallel 参数 (不支持ES6)terser-webpack-plugin 开启 parallel 参数
    通过 mini-css-extract-plugin 提取 Chunk 中的 CSS 代码到单独文件，通过 css-loader 的 minimize 选项开启 cssnano 压缩 CSS。
* 4、图片压缩
    - 使用基于 Node 库的 imagemin (很多定制选项、可以处理多种图片格式)
    - 配置 image-webpack-loader

* 5、缩小范围，范围越小，查找越快，下边是缩小范围的手段
    * 5.1、配置resolve.extensions 尽量减少后缀尝试 
    ```
        reslove:{
            extensions: [".js", ".jsx", ".json", ".css"]
        }
    ```
    * 5.2、resolve.modules 指明第三方的模块的绝对路径,
    * 设置为绝对路径
    ```
    resolve: {
        modules: [path.resolve(__dirname, 'node_modules')],
    }
    ```
    * 5.3、resolve.mainFields 
    * 只采用main字段作为入口文件描述字段（减少搜索步骤）
    ```
    resolve: {
        // 配置 target === "web" 或者 target === "webworker" 时 mainFields 默认值是：
        mainFields: ['browser', 'module', 'main'],
        // target 的值为其他时，mainFields 默认值为：
        mainFields: ["module", "main"],
    }
    ```
    * 5.4、noParse， 
    * 对完全不需要解析的库进行忽略，提供整体的构建速度
    ```
    module.exports = {
        // ...
        module: {
            noParse: /jquery|lodash/, // 正则表达式
            // 或者使用函数
            noParse(content) {
                return /jquery|lodash/.test(content)
            },
        }
    }...
    ```
    * 5.5、配置别名alias，配置别名可以提高webpack的查找速度
    ```
        const bootstrap = path.resolve(__dirname,'node_modules/_bootstrap@3.3.7@bootstrap/dist/css/bootstrap.css');
        resolve: {
            alias:{
                "bootstrap":bootstrap
            }
        }
    ```
 
    
    * 配置项和普通的文件一致，这个是用于loader的快速查找
    ```
    module.exports = {
        resolveLoader: {
            modules: [ 'node_modules' ],
            extensions: [ '.js', '.json' ],
            mainFields: [ 'loader', 'main' ]
        }
     };
    ```


    * 5.6、lgnorePlugin 完全排除模块
    * 用于忽略某些特定的插件，让webpack不把这些指定的模块打包进去

* 6、提取页面公共资源
    - 基础包分离：

    - 使用 html-webpack-externals-plugin，将基础包通过 CDN 引入，不打入 bundle 中使用 SplitChunksPlugin 进行(公共脚本、基础包、页面公共文件)分离(Webpack4内置) ，替代了 CommonsChunkPlugin 插件

* DLL、使用Dllplugin进行分包
* 7、利用缓存
    * 7.1 babel-loader 开启babel缓存
    * babel在转译JS过程中消耗比较高，将bable-loader执行的结果缓存起来,重新打包构建的时候
    * 会读取缓存，从而提高打包速度、降低消耗
    ```
     {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
        loader: "babel-loader",
        options: {
            cacheDirectory: true // 开启缓存
        }
        }]
    },
    ```
    * 7.2 cache-loader 启动缓存loader
    * 在一些开销比较大的loader之前加载此loader，达到将结果缓存到磁盘里的目的
    * 存和读也会造成时间开销，所有只对性能开销比较大的loader使用这个手段，比如babel-loader
    * demo针对babel-loader
    ```
        const loaders = ['babel-loader'];
        module.exports = {
            module: {
                rules: [
                {
                    test: /\.js$/,
                    use: [
                    'cache-loader',
                    ...loaders
                    ],
                    include: path.resolve('src')
                }
                ]
            }
        }
    ```
    * 7.3 hard-source-webpack-plugin
    * 配置hardSourceWepackPlugin
    * 为模块提供中间缓存，用了之后会在node_module中发现一个路径为node_module/.cache/hard-source的文件
    * 首次构建不会有太大变化，从第二次开始，构建时间可以减少大约百分之80
    * webpack5 集成了这个插件
    ```
        var HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

        module.exports = {
            entry: // ...
            output: // ...
            plugins: [
                new HardSourceWebpackPlugin()
            ]
        }
    ```
    * 7.4 oneOf
    * 每个文件的rules中的所有规则都会遍历一遍
    * 使用oneOf匹配了其中的一个就可以退出执行

