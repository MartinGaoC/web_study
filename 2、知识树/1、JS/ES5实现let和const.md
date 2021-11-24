###  ES6 let const 的块级作用域实现原理



* 作用域是一个独立的地盘，防止变量暴露或者外泄。最大的作用就是变量隔离，不同作用域下的重名变量不会产生冲突。
```
let a = 2
{
    let a = 3
    console.log(a)
}
console.log(a)
babel转译

var a = 2 
{
    var a_ = 3
    console.log(a_)
}
console.log(a)


通过立即执行函数实现
var a = 2
(function (){
    var a = 3
    console.log(a) // 3
})()
console.log(a) // 2
```

* const 需要使用definePrototype的配置项来进行控制，使变量的值不能被重新赋值

```
function _const(data, value){
    Object.definePrototype(window, data,{
        enumerable: false,
        configgurable: false,
        get: function(){
            return value
        },
        set: function (data) {
            throw new TypeError("Assignment to constant variable.");
        }
    })
}
```