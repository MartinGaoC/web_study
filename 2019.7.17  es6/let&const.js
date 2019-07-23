// let const 
// 尽可能使用const 如果这个值需要更改才用 let


// var  的问题
//1 var 声明的变了 声明到全局  污染全局变量（函数作用域 全局）
//2.变量提升 可以在声明之前调用  function  var import
// 3.let const 可以 {}方式来连用 块作用域
// 4.var能重复声明 在同一个作用域下

let a = 1;
{
    console.log(a);  // 暂存死区
    let a = 2;
}

const a = {}   // 深度改变  不可改变空间


// 空间不销毁 就是闭包