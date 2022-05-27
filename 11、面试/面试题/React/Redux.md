# Redux的设计思想
单项数据流

store是唯一的数据源

单一数据源

state只读

使用纯函数修改


# Redux的工作流程

1. const store=createStore(fn) 生成数据；

2. action:{type:Symble('action001'),payload:'payload1'} 定义行为；

3. dispatch 发起 action：store.dispatch(doSomethingfn('action001'));

4. reducer:处理 action，返回新的 state；

换句话解释是：

- 首先，用户(通过 view)发出 action，发出方式用到了 dispatch 方法

- 然后，store 自动调用 reducer，并且传入两个参数：当前 state 和收到的 action，reducer 会返回新的 state

- state 一旦有变化，store 就会调用监听函数，来更新 view。


# Redux的主要构成

Redux 源码主要分为几个模块文件：

- compose.js 提供从右到左进行函数式编程

- createStore.js 提供作为生成唯一 store 的函数

- combineReducers.js 提供合并多个 reducer 的函数，保证 store 的唯一性

- bindActionCreators.js 可以让开发者在不直接接触 dispatch 的前提下进行更改 state 的操作

- applyMiddleware.js 这个方法可以通过中间件来增强 dispatch 的功能