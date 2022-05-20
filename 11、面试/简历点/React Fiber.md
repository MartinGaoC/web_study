# React fiber

# 背景
* react在进行渲染的时候，从setState开始到渲染完成整个过程是同步的，如果需要渲染的组件比较大，js执行会长时间占据主线程，导致页面响应效果变差，使react在动画、手势方面应用效果比较差。
* 如果有庞大的dom树，解析dom树的过程就会很长，任何的交互布局渲染都会停止，给用户的感觉就像是卡住了

# 原理
* 旧版React通过递归的方式进行渲染，使用的是JS引起自身的函数调用栈，一直执行到空栈
* fiber是自己实现了组件调用栈，以链表的形式遍历组件树，可以灵活的暂停、继续和丢弃执行任务，实现方式是使用了浏览器的requestIdleCallback api，fiber其实是一种数据结构，可以用一个纯JS对象来表示

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