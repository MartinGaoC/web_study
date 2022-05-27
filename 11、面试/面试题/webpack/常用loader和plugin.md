# 常用loader
* raw-loader： 加载文件原始内容
* file-loader: 把文件输出到一个文件夹中，在代码中通过相对URL取引用输出的文件
* url-loader：与file-loader类似 都是用来处理图片和字体的
* source-map-loader： 加载额外的Souce Map文件，方便断点调试
* svg-inline-loader： 压缩SVG内容注入diamanté
* image-loader： 加载压缩图片文件
* json-loader：加载JSON文件
* babel-loader：ES6转ES5
* ts-loader：ts转js
* sass-loader： SCSS/SASS转css
* css-loader：加载css，支持模块话、压缩、文件导入等特性
* style-loader：css代码注入到js中，通过dom操作取加载CSS
* postcss-loader：扩展css语法，使用下一代css，可以配合autoprefixer插件自动补齐css3前缀
* eslint-loader： 通过eslint检查js代码
* tslint-loader: 通过tslint检查ts代码
* cache-loader： 在一些性能开销较大的Loader之前添加，将结果缓存到磁盘里


# 常用plugin
* define-plugin: 定义环境变量（Webpack4之后制定mode会自动配置）
* ignore-plugin：忽略部分文件
* webpack-parallel-uglify-plugin：多进程执行代码压缩，提升构建速度
* clear-webpack-plugin: 目录清理
* speed-measure-webpack-plugin： 看到每个loader和plugin执行耗时