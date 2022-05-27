// 1、JS是单线程，任务只能一件一件执行，这么多类型的任务如何在浏览器的主线程上按顺序执行呢

// 任务队列
// 浏览器任务队列是唯一的
// 是一种数据结构，存放要执行的任务，事件循环根据先进先出原则按顺序执行队列中的任务
// 多个线程会操作同一个任务队列，添加一些任务，比如鼠标滚动、点击、移动等
// 任务队列里的任务都是宏任务


// 同步、异步
// 同步：任务一个一个执行，某个任务执行时间长，后边也只能等
// 异步：执行某个任务的时候，该任务需要一段时间才能返回，就把这个任务的回调放到一个专门处理异步任务的模块。然后继续执行，不会阻塞
// 常见异步操作，定时器、ajax 事件绑定、promise then回调 async await
// 除了任务队列，还有一个专门处理异步回调任务的模块（延迟哈希表）


// 微任务、宏任务
// 为了处理高优先级的任务，解决单任务执行时间过长的问题
// 微任务 promise then 回调 async await  node中的process.nextTick


// 事件循环
// 入栈到出栈的循环
// 一个宏任务、所有微任务、渲染


async function async1 ()  {
    console.log('async1 start');
    await  async2();
    console.log('async1 end')
}

async function  async2 ()  {
    console.log('async2')
}

console.log('script start');

setTimeout(function ()  {
    console.log('setTimeout')
},  0);

async1();

new Promise(function (resolve)  {
    console.log('promise1');
    resolve()
}).then(function ()  {
    console.log('promise2')
});

console.log('script end')


// script start / async1 start / async2 / promise1 / script end / async1 end/ promise2 / setTimeout