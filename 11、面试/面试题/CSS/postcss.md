可以直观的理解为：postcss 是一个平台，因为直接使用它，感觉不能做出什么事情，但是如果让一些插件在它上面跑，那功能十分强大。

postcss 提供了一个解析器，能够将 css 解析成抽象语法树

通过在 postcss 这个平台上能够开发一些插件，来处理我们的 css，比如：autoprefixer

postcss 可以对 sass 处理过后的 css 再处理，比较常见的是 autoprefixer