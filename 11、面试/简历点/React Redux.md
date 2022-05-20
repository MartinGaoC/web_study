# React Redux

* React-redux是连接React和Redux的库，同时使用了react和redux的api
* 主要使用了react的context 传递 redux的store
* provider的作用就是接受store并放到context传递下去
* connect有两个参数mapStateToprops mapDispatchToprops
* connect会判断自己受需要更新，判断的依据是state是否已经发生了变化
* connect是一个浅比较，所以不要再两个函数参数汇总返回多层嵌套的对象

* Redux设计思想
* 单向数据流、Store是唯一数据源
* 三大原则
* 单一数据源、State只读、使用纯函数修改

* React-redux 其实脱胎与redux工作流形式，使用了发布订阅设计模式
* redux提供一个creatStore的创建函数，createStore是一个构造函数，提供三个方法 获取、派发、订阅
* 传入reducer，里边放了代码逻辑，返回state, dispatch派发的时候执行所有已经订阅的函数

* 