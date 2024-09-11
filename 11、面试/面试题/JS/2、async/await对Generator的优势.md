 * async/await是用来解决异步的，async函数是Generator的语法糖
 * 当函数执行的时候遇到await会优先返回，等到异步执行完成，在接着执行函数体后边的语句

 async相较Generator具有以下优点
 * 1、内置执行器
 * 2、更好的语义
 * 3、更广的适用性
 * 4、返回值是Promise