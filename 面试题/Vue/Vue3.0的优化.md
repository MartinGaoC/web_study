### Vue3.0
## vue3重写了多种机制
* 主要是基于
    - 浏览器对js的语言特性支持变高
    - 旧的vue代码随着时间 暴露除了设计的问题

### 优化点

* 重写VDOM机制：编译时增加标记 提高运行速度
* 优化slot生成：以前是父组件重新渲染，子组件跟着渲染。现在可以分别渲染。
* 静态树提升： 没有响应式绑定的部分被提取出来作为常量，用到的时候不再执行它的渲染函数
* 静态属性提升： 没有响应式绑定的属性 被提取出来作为常量。用到的时候不用自行创建
* 项目结构优化： 内部解耦 更好维护 支持了细度的tree-shaking 比如可选的生命周期

## Object.defineProperty 与 Proxy
* vue2 中 Object.defineProperty 会改变原始数据
* Proxy是创建对象的虚拟表示，提供set get deleteProperty等处理器。 具有以下特点
    - 不需要使用Vue.$set 或 Vue.$delete触发响应式
    - 全方位的数组变化检测，消除vue2无效边界情况
    - 支持Map Set WeakMap 和WeakSet