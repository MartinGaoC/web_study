# React fiber

# 背景
* JS引擎和页面渲染引擎两个线程事互斥的，react在进行渲染的时候，从setState开始到渲染完成整个过程是同步的，如果需要渲染的组件比较大，js执行会长时间占据主线程，那么渲染层的更新就不得不长时间等待，页面长时间不更新，会导致页面响应度变差，用户感觉卡

* react15原理：旧版React通过递归的方式进行渲染，使用的是JS引起自身的函数调用栈，一直执行到空栈


* 这就是react15要面临的问题，渲染过程无法中断
* React16 为了解决这个问题
* 1.增加了优先级
* 2.增加了异步任务，使用requestIdleCallback.api 在浏览器空闲的时候执行
* 3.dom diff树变成了链表，一个dom对应两个fiber，对应两个队列
* fiber是自己实现了组件调用栈，以链表的形式遍历组件树，可以灵活的暂停、继续和丢弃执行任务，实现方式是使用了浏览器的requestIdleCallback api，fiber其实是一种数据结构，可以用一个纯JS对象来表示
  
* fiber节点就是一个JS对象
  ```
  type Fiber = {
  // 用于标记fiber的WorkTag类型，主要表示当前fiber代表的组件类型如FunctionComponent、ClassComponent等
  tag: WorkTag,
  // ReactElement里面的key
  key: null | string,
  // ReactElement.type，调用`createElement`的第一个参数
  elementType: any,
  // The resolved function/class/ associated with this fiber.
  // 表示当前代表的节点类型
  type: any,
  // 表示当前FiberNode对应的element组件实例
  stateNode: any,

  // 指向他在Fiber节点树中的`parent`，用来在处理完这个节点之后向上返回
  return: Fiber | null,
  // 指向自己的第一个子节点
  child: Fiber | null,
  // 指向自己的兄弟结构，兄弟节点的return指向同一个父节点
  sibling: Fiber | null,
  index: number,

  ref: null | (((handle: mixed) => void) & { _stringRef: ?string }) | RefObject,

  // 当前处理过程中的组件props对象
  pendingProps: any,
  // 上一次渲染完成之后的props
  memoizedProps: any,

  // 该Fiber对应的组件产生的Update会存放在这个队列里面
  updateQueue: UpdateQueue<any> | null,

  // 上一次渲染的时候的state
  memoizedState: any,

  // 一个列表，存放这个Fiber依赖的context
  firstContextDependency: ContextDependency<mixed> | null,

  mode: TypeOfMode,

  // Effect
  // 用来记录Side Effect
  effectTag: SideEffectTag,

  // 单链表用来快速查找下一个side effect
  nextEffect: Fiber | null,

  // 子树中第一个side effect
  firstEffect: Fiber | null,
  // 子树中最后一个side effect
  lastEffect: Fiber | null,

  // 代表任务在未来的哪个时间点应该被完成，之后版本改名为 lanes
  expirationTime: ExpirationTime,

  // 快速确定子树中是否有不在等待的变化
  childExpirationTime: ExpirationTime,

  // fiber的版本池，即记录fiber更新过程，便于恢复
  alternate: Fiber | null,
}
  ```

# 原理


# 内部运转
* react内部运转分为三层
  - VirtualDOM（虚拟dom）层 描述页面长什么样子
  - Reconciler（识别执行）层 负责调用组件声明周期方法，进行Diff运算
  - Renderer层 根据不同的平台渲染不同的页面

* FiberReconclier 执行过程
  - 阶段一：生成一个Fiber树，得出需要更新的节点信息，这一步是一个渐进的过程可以被打断
  - 阶段二：将需要更新的节点一次批量更新，这个过程不能被打断


* Fiber树
* fiber在阶段一进行diff计算的时候，会基于virtual DOM树生成一颗Fiber树，本质是链表



* 底层调度是使用了requestAnimationFrame、requestIdleCallback、MessageChannel等window Api。  底层逻辑
* 达到了初始化dom构建dom的过程是可以被中断的目的，从而提高响应用户操作的速度   
* fiber把babel转译过的虚拟dom节点 转换成为了fiber节点，fiber节点了包括stateNode、child、effTag、副作用链条等字段

* 基于Fiber构成的虚拟DOM树就是Fiber架构
* Fiber节点中有一个重要属性 ***alternate*** 单词 意思 是备用
* React最多会存在两颗Fiber树
  - 当前显示在屏幕上的 已经构建完成的Fiber树称为 Current Fiber Tree 节点简称为currFiber
  - 当前正在构建的Fiber树称为 WorkINProgress Fiber Tree  节点简写为wipFiber

* 这两棵树节点的 alternate 属性互相指向对方树中的对应节点。用于对比更新前后的节点 决定如何更新此节点

# Fiber节点的处理顺序 ——DFS
* Fiber节点通过  child sibling return三个属性相互连接，整体构成一个单向链表，调度方式就是 深度优先遍历
* 然后更新整个Fiber树

# Fiber节点是如何处理的？
* 完善构建一个Fiber节点，创建DOM并获取children  DFS算法单元待研究

# 提交更新阶段
* 进入这个阶段就已经代表新的Fiber树已经构建完成，需要进行替换、更新或删除Fiber节点的操作。
* 这里需要找effectTag标记，根据effectTag操作真实Dom