# 初始化阶段。

发生在 constructor 中的内容，在 constructor 中进行 state 、props 的初始化，在这个阶段修改 state，不会执行更新阶段的生命周期，可以直接对 state 赋值。

# 挂载阶段。

1. componentWillMount
   发生在 render 函数之前，还没有挂载 Dom
2. render
3. componentDidMount
   发生在 render 函数之后，已经挂载 Dom
复制代码

更新阶段。

# 更新阶段分为由 state 更新引起和 props 更新引起。
props 更新时：
1. componentWillReceiveProps(nextProps,nextState)
   这个生命周期主要为我们提供对 props 发生改变的监听，如果你需要在 props 发生改变后，相应改变组件的一些 state。在这个方法中改变 state 不会二次渲染，而是直接合并 state。
2. shouldComponentUpdate(nextProps,nextState)
   这个生命周期需要返回一个 Boolean 类型的值，判断是否需要更新渲染组件，优化 react 应用的主要手段之一，当返回 false 就不会再向下执行生命周期了，在这个阶段不可以 setState()，会导致循环调用。
3. componentWillUpdate(nextProps,nextState)
   这个生命周期主要是给我们一个时机能够处理一些在 Dom 发生更新之前的事情，如获得 Dom 更新前某些元素的坐标、大小等，在这个阶段不可以 setState()，会导致循环调用。
    **一直到这里 this.props 和 this.state 都还未发生更新**
4. render
5. componentDidUpdate(prevProps, prevState)
   在此时已经完成渲染，Dom 已经发生变化，state 已经发生更新，prevProps、prevState 均为上一个状态的值。

state 更新时（具体同上）
1. shouldComponentUpdate
2. componentWillUpdate
3. render
4. componentDidUpdate
复制代码

# 卸载阶段。

1. componentWillUnmount
   在组件卸载及销毁之前直接调用。在此方法中执行必要的清理操作，例如，清除 timer，取消网络请求或清除在 componentDidMount  中创建的订阅等。componentWillUnmount 中不应调用 setState，因为该组件将永远不会重新渲染。组件实例卸载后，将永远不会再挂载它。


在 React 16 中官方已经建议删除以下三个方法，非要使用必须加前缀：UNSAVE_ 。
componentWillMount;
componentWillReceiveProps;
componentWillUpdate;
复制代码
取代这两三个生命周期的以下两个新的。
1. static getDerivedStateFromProps(nextProps,nextState)
   在组件实例化、接收到新的 props 、组件状态更新时会被调用
2. getSnapshotBeforeUpdate（prevProps,prevState）
   在这个阶段我们可以拿到上一个状态 Dom 元素的坐标、大小的等相关信息。用于替代旧的生命周期中的 componentWillUpdate。
   该函数的返回值将会作为 componentDidUpdate 的第三个参数出现。

需要注意的是，一般都会问为什么要废弃三个生命周期，原因是什么。


# 为何移除 componentWillUpdate
大多数开发者使用 componentWillUpdate 的场景是配合 componentDidUpdate，分别获取 rerender 前后的视图状态，进行必要的处理。但随着 React 新的 suspense、time slicing、异步渲染等机制的到来，render 过程可以被分割成多次完成，还可以被暂停甚至回溯，这导致 componentWillUpdate 和 componentDidUpdate 执行前后可能会间隔很长时间，足够使用户进行交互操作更改当前组件的状态，这样可能会导致难以追踪的 BUG。

React 新增的 getSnapshotBeforeUpdate 方法就是为了解决上述问题，因为 getSnapshotBeforeUpdate 方法是在 componentWillUpdate 后（如果存在的话），在 React 真正更改 DOM 前调用的，它获取到组件状态信息更加可靠。

除此之外，getSnapshotBeforeUpdate 还有一个十分明显的好处：它调用的结果会作为第三个参数传入 componentDidUpdate，避免了 componentWillUpdate 和 componentDidUpdate 配合使用时将组件临时的状态数据存在组件实例上浪费内存，getSnapshotBeforeUpdate 返回的数据在 componentDidUpdate 中用完即被销毁，效率更高。
