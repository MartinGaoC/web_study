# React Redux

* React-redux是连接React和Redux的库，同时使用了react和redux的api
* 主要使用了react的context 传递 redux的store
* provider的作用就是接受store并放到context传递下去
* connect有两个参数mapStateToprops mapDispatchToprops
* connect会判断自己受需要更新，判断的依据是state是否已经发生了变化
* connect是一个浅比较，所以不要再两个函数参数汇总返回多层嵌套的对象
* connect 会自己判断是否需要更新，判断的依据是需要的state是否已经发生了变化
* connect 在判断是否变化的时候使用的是浅比较，也就是只比较一层，所以在mapStateToProps和mapDispatchToProps中不要返回多层嵌套的对象
* 为了解决父组件和子组件各自独立依赖redux，破坏了react的父级--> 自己的更新流程，react-redux使用subscription类自己管理一套通知流程
* 只有连接到redux最顶级的组件才会注册到React store，其他子组件都会注册到最近父组件的subscription实例上
* 通知的时候从根组件开始依次通知自己的子组件，子组件接收到通知的时候，先更新自己在通知自己的子组件


* Redux设计思想
* 单向数据流、Store是唯一数据源
* 三大原则
* 单一数据源、State只读、使用纯函数修改

* React-redux 其实脱胎与redux工作流形式，使用了发布订阅设计模式
* redux提供一个creatStore的创建函数，createStore是一个构造函数，提供三个方法 获取、派发、订阅
* 传入reducer，里边放了代码逻辑，返回state, dispatch派发的时候执行所有已经订阅的函数


解决的问题
单纯的redux只是一个状态机，是没有UI呈现的，react-redux作用是将redux的状态机和react的UI呈现绑定在一起，当你dispatch action改变state的时候，会自动更新页面。

F