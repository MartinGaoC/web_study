Redux 异步功能
Redux 是单项数据流，通过 actio 触发 reducer 来修改 store。redux 存在中间件，中间件改写了 dispatch 方法，对于异步操作可以通过中间件的方式实现。

使用异步中间件，主流的三种：thunk、saga、observable

# redux-thunk
* 用于异步操作
  - 默认情况下的dispatch(action)，action需要是一个JavaScript的对象

    redux-thunk中间件会判断你当前传进来的数据类型，如果是一个函数，将会给函数传入参数值（dispatch，getState）


    允许编写返回函数而不是 action 的创建者

  - thunk 可用于延迟 action 的发送，或仅在满足在某个条件时发送

  - 内部函数接收 store 的方法 dispatch 和 getState 作为参数

优点：学习成本低，使用 promise 更简单

缺点：一个异步请求的 action 代码过于复杂，且异步操作太分散，而 saga 只要调用一个 call 方法简单多了;耦合严重：异步操作和 action 耦合在一起;action 形式不统一，如果不一样的异步操作，就要写多个了，不宜维护。

# redux-saga
saga 就像你的项目中的一个单独的线程，它独自负责副作用

优点：异步解耦，所有的异步操作放在 saga.js 集中处理，异步接口部分一目了然；action 不传函数，是普通对象，这跟 redux 同步的 action 一模一样({type:xxxx})；异常处理，受益于 generator 函数，代码异常/请求失败可直接通过 try/catch 捕获处理；功能强大，redux-saga 提供了大量的 saga 辅助函数和 effect 创建器供开发者使用，开发者无须封装或者简单封装即可使用；灵活，redux-saga 可以将多个 saga 可以串行、并行组合起来，形成一个非常实用的异步 flow；易于测试，通过 effect，方便异步接口的测试；通过 worker 和 watcher 可以实现非阻塞异步调用，并且同时可以实现非阻塞异步调用，并且同时可以实现非阻塞调用下的事件监听；异步操作的流程是可以控制的，可以随时取消相应的异步操作。

缺点：学习成本高；体积庞大：2000 行，mini 版 25kb；功能过剩，一般项目开发用不到这么复杂的并发控制；ts 支持不友好，yield 无法返回 TS 类型

# Redux-observable
优点：功能最强，由于背靠 rxjs 这个强大的响应式编程的库，借助 rxjs 的操作符，可以几乎做任何能想到的异步处理；背靠 rxjs，由于有 rxjs 的加持，如果已经学习了 rxjs，redux-observab 的学习成本并不高，而且随着 rxjs 的升级，redux-observable 也会变得更强大

缺点：学习成本更高，如果不会 rxjs，则需要额外学习；社区一般，redux-observable 的下载量只有 redux-saga 的 1/5，社区也不够活跃，在复杂异步流中间件这个层面 redux-saga 仍处于领导地位。