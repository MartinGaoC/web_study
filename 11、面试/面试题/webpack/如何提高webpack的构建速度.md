# 
* 1、费时分析 先下载插件speed-measure-webpack-plugins
* 2、缩小范围，范围越小，查找越快，下边是缩小范围的手段
    * 2.1、配置resolve 添加扩展名
    ```
        reslove:{
            extensions: [".js", ".jsx", ".json", ".css"]
        }
    ```
    * 2.2、配置别名alias，配置别名可以提高webpack的查找速度
    ```
        const bootstrap = path.resolve(__dirname,'node_modules/_bootstrap@3.3.7@bootstrap/dist/css/bootstrap.css');
        resolve: {
            alias:{
                "bootstrap":bootstrap
            }
        }
    ```
    * 2.3、modules 如果可以确定项目内所有的第三方依赖模块都是在项目根目录下的node_modules 中的话,
    * 设置为绝对路径
    ```
    resolve: {
        modules: [path.resolve(__dirname, 'node_modules')],
    }
    ```
    * 2.4、mainFields 
    * 默认情况下package.json文件按照文件中main字段的文件名来查找文件
    ```
    resolve: {
        // 配置 target === "web" 或者 target === "webworker" 时 mainFields 默认值是：
        mainFields: ['browser', 'module', 'main'],
        // target 的值为其他时，mainFields 默认值为：
        mainFields: ["module", "main"],
    }
    ```
    * 2.5、resolveLoader 用于配置解析loader时的resolve配置
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
* 3、noParse， 用于配置那些模块文件的内容不需要解析
* 不需要解析的依赖，可以通过这个字段来配置，提供整体的构建速度
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

* 4、lgnorePlugin 忽略插件
* 用于忽略某些特定的插件，让webpack不把这些指定的模块打包进去


* 5、日志优化
* 配置 friendly-errors-webpack-plugin 包

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