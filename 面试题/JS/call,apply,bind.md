* call, apply , bind
* 相同点
- 都可以改变函数this的指向，改变函数的执行环节
- 为函数提供参数

* 不同点
* call和apply都是立即执行而且是用来调用函数，bind非立即执行用来创建一个新的函数
* 

# call

* call的第一个参数 是指定运行环境

* 函数fn直接运行是语法糖,其实真正的是调用了call方法 默认是window环境。
```
fn() = fn.call()
```