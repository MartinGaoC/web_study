nodeJS 应用程序一般会遇到以下四类错误：
标准的JS错误：例如<EvalError>、<SyntaxError>、<RangeError> 、<ReferenceError>、<TypeError> 或<URIError>

由底层操作系统触发的系统错误，例如试图打开不存在的文件或者试图更新已关闭的 socket 发送数据

由应用程序代码触发的用户自定义的错误

AssertionError 错误，当 Node.js 检测到不应该发生的异常逻辑时触发。这类错误通常来自assert模块

所有由 nodeJS 引起的 JavaScript 错误与系统错误都继承或实例化标准的 JavaScript<Error>类，并保证至少提供类中的属性

nodeJS 支持几种当应用程序运行时发生的错误的冒泡和处理的机制，如何报告和处理这些错误完全取决于 Error 的类型和被调用的 API 的风格

所有 JavaScript 错误都会被作为异常处理，异常会立即产生并使用标准的 JavaScript throw机制抛出一个错误。这些都是使用 JS 语言提供的try...catch...语句处理的。

JS 的throw机制的任何使用都会引起异常，异常必须使用try...catch...处理，否则 nodeJS 进程会立即退出。

除了少数例外，同步的 API(任何不接受 callback 函数的阻塞方法)会使用 throw 报错

异步的 API 中发生的错误可能会以多种方式进行报告：

大多数的异步方法都接受一个 callback 函数，该函数会接受个 Error 对象传入作为第一个参数。 如果第一个参数不是 null 而是一个 Error 实例，则说明发生了错误，应该进行处理。

当一个异步方法被一个 EventEmitter 对象调用时，错误会被分发到对象的error事件上。

NodeJS API 中有一小部分普通的异步方法仍可能使用 throw 机制抛出异常，且必须使用 try...catch...处理。