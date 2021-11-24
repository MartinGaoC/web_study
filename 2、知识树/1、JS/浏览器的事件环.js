//  js 是单线程 主线程   setTimeout ajax  click 可以开辟进程
//  进程包含线程

// 默认代码执行的时候  会在执行栈中执行  栈 先进后出


// 主栈代码执行后  再去执行.then的微任务   然后再去执行  setTimeou等开辟的宏任务



//异步任务 =  宏任务   setTimeout ajax  click
//then队列 = 微任务   promise  MutationObserver