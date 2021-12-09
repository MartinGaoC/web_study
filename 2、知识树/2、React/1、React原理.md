# React原理

# 什么是jsx？

const element = <h1>hello world<h1>

* jsx可以生成react元素


# 虚拟dom是什么？ 为什么要用虚拟dom

* 虚拟dom就是用js对象表示一个dom节点，内部包含了节点的tag，props和children
* 操作真实的dom繁琐低效，通过虚拟dom 把一部分昂贵的浏览器重绘工作转移到相对廉价的存储和计算资源上。

# 如果把JSX转换为虚拟DOM

* 通过babel可以讲JSX编译为特定的JS对象  实例代码

const e= {
    <div id="root">
        <h1 className="title">Title</h1>
    </div>
}

* babel编译结果

var e = React.createElement("div",{id: "root"}, ReactElement("h1", {className: "title"}, "Title"))


# 如何将虚拟DOM渲染出来

* 虚拟Dom中包含了创建dom的各种信息，对于首次渲染，直接依照这些信息创建Dom节点
* 虚拟dom的真正价值在于更新，通过对比前后的虚拟Dom树，最小化更新真实的Dom。这就是React的核心目标


# React  diffing 算法

* Diffing就是找不同
* React的算法模式是基于以下两个假设
- 不同类型的元素会产生不同的树
- 通过设置key属性来标识同级别子元素在渲染前后是否保持不变


# Diffling算法描述

* 同一类型的元素
* 保留此Dom节点，仅对比和更新有改变的属性  比如 className title
* 对于style属性，React会继续对比，仅更新有改变的属性，茹color

* 同一类型的组件
* 当组件props更新时，组件实例保持不变，React调用组件的componentWillReceiveProps() componentWillUpdata() 和 componentDidUpdate()生命周期方法，并执行render()方法。
* diffing算法会递归对比新旧render()执行的结果

* 对子节点的递归
* 解决方案是为一组列表添加key属性，key应稳定、可预测 且在列表内唯一。
* 避免使用索引值，更新列表后，索引和元素的对应关系会发生改变。



# 递归 Diffing 的进化史
* 因为浏览器的渲染进程和JS的执行进程是互斥的。所以
* React最初使用了时间切片的策略， 将整个工作流程分解成最小的工作单元，浏览器空闲的时候执行这些单元，每个单元执行完毕后，浏览器都可以选择中断渲染。并优先处理其他优先级高的
* 时间切片策略要求满足以下几个特性
  - 可暂停 可恢复的更新
  - 可跳过的重复性、覆盖性更新
  - 具备优先级的更新

* 对于递归来说 以上特性是难以实现的，所以就需要一个处于递归形式的虚拟DOM树上层的数据结构，来辅助完成
* 这就是React16之后引入的算法核心 Fiber


#  Fiber
* Fiber的概念 及时重构后的虚拟DOM节点， 一个Fiber就是一个JS对象
* Fiber节点之间 是  ***单向链表***结构 可以实现上边说的特性


# Fiber节点
* 一个Fiber节点就是一个js对象


# Fiber架构
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




***利用一天时间完成构建自己的React***