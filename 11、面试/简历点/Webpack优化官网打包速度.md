* webpack代码分割

* 使用splitChunks进行了一系列的配置
* 1、设置分割全部模块
* 2、设置缓存组 第三方提供者 + 共享组
* 3、在第三方提供者组里配置test规则，设置引用路径必须为node_modules依赖里的
* 4、设置共享组里的minChunks，配置为2，如果有模块被两个以上的代码块引用 就提取出来





* splitChunks 是公共配置
* cacheGroups里的是单独配置
```
// 自动分割第三方模块和公共模块
optimization: {
    splitChunks: {
        chunks: 'all', // 要分割那些代码块 三个值all/initial/async 默认只分割异步
        minSize: 0, // 默认值是30kb，代码块的最小尺寸，大于这个尺寸就会提取出去
        minChunks: 1, // 被多少模块共享，在分割之前模块的被引用次数，达到多少次就会被分割
        maxAsuncRequests: 2, // xi
        name: true, // 设置代码块打包后的名称，默认名称是用分割符～分割开的原始代码块
        // 缓存组：设置不同的缓存组来抽取满足不同规则的chunk
        cacheGroups:{
            // vendors 第三方提供者
            vendors:{ // 把符合条件的缓存组提取出来放在vendor这个代码块里
                chunks: 'all',
                test:/node_modules/, // 条件，如果一个模块符合多个缓存组的条件
                priority: -10, // 优先级，数字越高优先级

            },
            // commons 提供不同代码块之间的公共代码
            commons:{
                minChunks:2, // 如果这个模块被两个或两个以上的代码块引用了，就可以单独提取出来
                minSize: 0  // 被提供的代码的大小，默认30k 也就是 30000
            }
        }
    }
}
```




* 把代码库分割成chunks语块，当代码运行到需要它们的时候再进行加载
* 1、动态导入和懒加载
* 通过import关键字 点击的时候再导入，import会进行天然的代码分割
* 2、按需加载
* 通过React.lazy ，加载import导入组件
* 3、预先加载preload
* 提高关键资源的加载优先级
  ```
  <link rel="preload" as="script" href="utils.js">
   // 等同于
  import(
    `./utils.js`
    /* webpackPreload: true */ // 配置项
    /* webpackChunkName: "utils" */
    )
  ```
* 4、预先拉取





* 2、开启缓存 配置loader缓存
  
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