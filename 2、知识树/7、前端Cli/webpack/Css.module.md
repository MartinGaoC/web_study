## Css module

* 像js应用的import引入css代码，代码中的每一个类名都是对象中的一个属性，在css module打包的时候自动把类名转换为hash值，避免css类名冲突的问题

* 配置css loader打包
```
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use:{
          loader: 'css-loader',
          options: {
            modules: {
              // 自定义 hash 名称
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
            }
          }
       }
    ]
  }
};
```