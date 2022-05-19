# React fiber

* fiber是React 16 更新出来的底层解决方案，为了解决React15之前虚拟dom构建不能中断的问题
* 底层调度是使用了requestAnimationFrame、requestIdleCallback、MessageChannel等window Api。
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