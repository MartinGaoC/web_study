# Provider
* 从最外部 封装了整个应用，并向connect模块传递Store


# connect

* 首先是一个高阶函数
* 第一次运行 有两个 函数参数 一个映射 redux的state方法 一个映射redux的dispatch方法
* 第二次把整个组件传进去
* 监听了store tree的变化，connect缓存了store tree中的state状态。通过比较 当前的state和变更前的state状态进行比较。从而确定是否需要重新渲染