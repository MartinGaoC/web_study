# React解决的问题

1. Redux是一个用来管理数据状态和UI状态的JS应用工具，Redux是用来降低管理数据的难度的
2. 由于React中的数据是单向自上而下的，所以为了管理数据回调以及兄弟组件间的通信使用Redux
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


# Redux 数据流的过程
1. 以Store为核心，Store为数据存储中心，但是不能直接修改。修改数据的权利由Reducers来决定
2. 当Reducers修改完成之后，就会通过store的订阅来通知react commponent，组件渲染新的状态
3. 调用Store的dispatch 传入对应的action。reducers接收对应的action来执行相应的逻辑，然后执行订阅subscride来更新视图