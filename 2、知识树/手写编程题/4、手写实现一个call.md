# call是干啥的

*  最主要的作用就是改变this的指向
* 改变函数执行的时候的上下文

* 举个例子， B对象因为某些原因要用A对象的属性。
* 调用call和apply的对象必须是一个函数
*  call的第一个参数是一个对象，function的调用者，会指向到这个对象，不传就是默认的windows
* 第二个参数可以接收任意个参数，会映射到function的参数上，如果穿一个数组，就会映射到第一个参数，后边的参数都为空

* 写法
```
function.call(obj,[params1])
```
* call的使用场景，举个例子
```
function a (){
    this.a = 1;
    this.print = function (){
        console.log(this.a)
    }
}
function b () {
    a.call(this)
    this.print() // 1
    // 这里b的this指向到了a，所以继承了a的属性和方法
}
```

* 借用方法
```
let demo = Array.prototype.slice.call(document.getElementsByTagName("*"))
```
* demo借用了Array下的所有方法


* 使用例子
```
function fun(arg1, arg2){
    console.log(this)
    console.log(this.name);
    console.log(arg1+ arg2)
}

let _demo = {name: 'YIYang'}

fun.call(_demo, 1, 2)
// this指向从函数 到对象
```

// 手写算法见JS