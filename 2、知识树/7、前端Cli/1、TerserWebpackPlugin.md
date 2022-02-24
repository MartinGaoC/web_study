# terser-wabpack-plugin 

* 内部封装了terser库，用于处理js的压缩和混淆。通过webpack-plugin的方式对代码进行处理


* terser-webpack-plugin主要做了什么？ 优化代码的流程

* 异步注册 compilation.hooks.optimizeChunkAssets
* ***并行模式*** 创建Worker进行多线程编译
* minify 过程（处理代码的入口）调用terser库对代码进行处理


# https://zhuanlan.zhihu.com/p/380612044
```
// 压缩js
new TerserPlugin({
  cache: true,
  parallel: true,
  extractComments: false, // 移除license文件
  terserOptions: {
    compress: {
      comparisons: false, // 关闭二进制优化
      drop_console: false,
    },
    parse: {},
    mangle: true,
    output: {
      comments: false,
      beautify: false,
      ascii_only: true, // 非ASCII字符转换为UTF-8
    },
  },
  parallel: true, // 多线程
  cache: true,
  sourceMap: true,
}),
```