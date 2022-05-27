require和import的区别

导入require 导出 exports/module.exports 是 CommonJS 的标准，通常适用范围如 Node.js
import/export 是 ES6 的标准，通常适用范围如 React
require 是赋值过程并且是运行时才执行，也就是同步加载
require 可以理解为一个全局方法，因为它是一个方法所以意味着可以在任何地方执行。
import 是解构过程并且是编译时执行，理解为异步加载
import 会提升到整个模块的头部，具有置顶性，但是建议写在文件的顶部。

