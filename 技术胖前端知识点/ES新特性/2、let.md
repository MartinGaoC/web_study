# let特性

* 1、不影响作用域链

* 2、不能变量提升，初始化的时候不会赋值

* 3、 不能重复声明

* 补充知识点，es5 只有三个作用于  全局 函数 eval（只在严格模式出现）


* 使用for循环的时候 注意使用let的块级作用域




*  变量提升在 创建变量之前 获取变量 会发生什么？

* var 会在初始化阶段就会显示 undefined
* javascript在编译阶段，会找到所有的var添加到语法环境中，并初始化一个undefined
```
console.log(a) // undefined
var a
```

* let和const也会进行变量提升，但是是到赋值阶段 如果还没有找到值的话才会赋一个undefined
```
console.log(a)  // 报错
let a = '1'
console.log(a)  // 1
```

* 在执行阶段，如果发现变量没有被赋值，才会给一个默认的undefined。








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

