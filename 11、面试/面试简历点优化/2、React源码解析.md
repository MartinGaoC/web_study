# 1、 React Fiber

* 背景  
 - JS引擎和页面渲染引擎是互斥的，其中一个指向 另一个只能挂起等待。这个机制下 如何JS线程长时间占用主线程。那么渲染页面就得长时间的进行等待。也响应度就会变差，用户就会觉得卡。
 - 这就是React15面临的问题，react 15本质底层上使用的是递归的算法。使用的是JS自身的一个函数调用站，会一直执行到空为止。所以老版本的react 渲染是一口气完成的 中间不能中断

* fiber是什么
 -  fiber和进程和线程相比 它是一个更精细的过程，主要是对渲染过程进行了更精细的控制和拆分
 -  从架构的角度来看，fiber就是重写了react的核心算法
 -  从编码的角度来看 Fiber就是react内部定义的一种数据结构，也就是虚拟DOM

* fiber是如何解决问题的
 - 首先fiber对原先的一大坨渲染任务进行了更加细致化的拆分，而不是一次性完成，把拆分出来的的很细的一个任务视为一个执行单元。
 - 会检查浏览器每帧剩余的渲染时间，如果有空闲的时间，就会把主线程交换给渲染线程
 - 即fiber会实现一个叫增量渲染的功能，可以实现中断与恢复。并给不通的执行单元不同的优先级。所以会把执行单元分散在各个帧里。最后每个执行单元都会更新成为React Element对应的fiber节点这样就解决了 页面渲染卡顿的问题


 * fiber的底层实现原理
 - fiber的底层其实就是react 团队 对window 方法 requestdelCallback这个api 进行了劫持和扩展
 - requestdelCallback这个api 的执行条件的前提条件是当前浏览器处于空闲状态。就是说浏览器渲染一帧的剩余时间执行优先级比较低的任务
 - 通过这个api react就实现了与浏览器所谓的合作式调度
 - 然后静态数据的角度来讲，fiber的每个节点都对应一个react的element  所以会包含一些  函数组件 或者类组件的数据
 - 动态单元的角度来看的话，fiber节点会保存每次更新 组件保存的状态和要执行的任务。
 - fiber形成树的主要几个联系属性 就是  this.return 指向父级  this.child 指向子级 this.sibling 指向右边第一个兄弟节点


 # 2、 react-redux

* redux用来解决的问题
    - Redux首先是一个用来管理数据状态和UI状态的JS应用工具，是用来降低数据管理难度的
    - Redux主要用来解决兄弟组件中的数据回调以及通信问题

* Redux的主要设计思想
    - 单项数据流
    - 数据是自上而下的
    - store是其唯一的数据源
    - state是只读的

* Redux的工作流程
    - store是核心 是存储数据的中心
    - 更改数据的时候不能直接进行更改，修改数据交给reducers来进行
    - reducers 更新完成之后通过store的订阅来通知react 组件
    - 组件里我们需要主动创建actions发送，需要通过dispath来发送actions

# 3 React Hooks
    - hooks 维护了两个链表 
    - 每当调用useXXX的时候 React就会创建一个hook对象，并挂载在链表尾部
    - 函数式组件之所以能做到一些class组件可以做到的事情 就是因为hooks
    - 函数组件的状态  计算值 缓存的函数 都是由hooks进行管理
    - hook通过Fiber.memoizedState属性和调用的组件关联
    - hook串联的不是一个数组 是一个链式的数据结构。所以不能嵌套使用 不能在条件判断和循环中使用


# 4 react的setState是同步还是异步的
    - 两种情况都有
    - 在原生事件中 如 setTimeout是同步 在 react事件和钩子函数中是异步的

# 5 React的生命周期
16.4 版本
    - react的生命周期主要分为三个阶段
    - 挂载
        - coun  完成数据的初始化
        - getDerivedStateFromProps 每次渲染之前调用，静态方法。不能访问this
        - willmound 不推荐使用
        - render  渲染
        - didmount  组件挂载之后调用 适合进行一些网络请求的操作
    - 更新 当props和state更新时候触发
        - getDerivedStateFromProps 也会重新出发
        - shouldComponentUpdate  决定组件是否重新渲染 返回true和false
        - render  再次渲染组件的UI
        - DeforeUpdate 获取最近一次渲染的信息，比如滚动的位置信息
        - diduptate   组件更新后调用
    - 卸载 
        - unwillmound  组件卸载之前调用

  父子组件的触发顺序
 挂载阶段
  parent.curstor
  parent.propsfromstate
  parent.render
  child.curstor
  child.prposfromstate
  child.render
  child.didmount
  parent.didmount
    更新阶段
    parent.propsforomstate
    parent.sholdComponentUptate
    parent.render
    child.propsforomstate
    child.sholdComponentUptate
    child.render
    child.deforeUpdate
    parent.deforeUpdate
    child.didupdate
    parent.didupdate

    卸载
    child.willunmount
    parent.willunmount

 函数组件中useEffect 可以看作  didmount didupdate  willunmount的结合

# hooks知识点
    * hooks解决了哪些问题
        - 状态逻辑复用的问题
        - 组件之间相同的操作无法复用
        - 函数组件没有自己的状态，使用hooks让函数组件拥有自己的状态
        - hook更容易把状态和UI组件进行分离
    * useMemo
        - 缓存数据，避免多次调用计算函数
    * useCallback
        - 缓存一个函数

# 配置React-router
    使用 <Router>标签 的path 属性来匹配当前地址的pathname

# React性能优化
    - 减少计算量
        - 虚拟列表  只渲染当前视口可见的数据
    - 使用缓存
        useMemo的方式
    - 精确重新计算的范围  降低渲染范围

# 受控组件和非受控组件
    受控组件 通过传导的prop数据进行控制
        比如表单就要受控
    非受控组件 自动进行赋值处理 初始化接收外部数据，然后自己存储状态

# React 懒加载
    使用React.lazy方式
    动态导入 import
    Suspense组件