# Vue3.0
* vue3重写了多种机制
# 原因
* 1、主流浏览器对新的JS语言特性的普遍支持
* 2、当前Vue代码库暴露出来的设计和体系架构问题

# Vue3较Vue2做的优化
* 1、重写VDOM机制：通过编译时的标记优化运行时的速度
* 2、优化插槽slot生成，原来的实现是父组件重渲染子组件也必须重新渲染，Vue3中子组件提取函数后，可以分别渲染
* 3、静态树提升：
* 4、静态属性提升
* 5、项目结构优化：


# Object.defineProperty 与Proxy
* 在vue2中Object.defineProperty会改变原始数据。而Proxy是创建对象的虚拟表示，并提供set、get和deleteProperty等处理器，这些处理器可在访问或修改原始对象上的属性进行拦截


* monorepo 方式进行管理，模块拆分到package目录中
* Vue3采用ts开发，增强类型及acne，vue2采用flow
* Vue3的性能优化，支持tree-shaking 不实用就不会被打包
* Vue2后期引入RFC（提交意见）


* Vue3劫持数据采用proxy Vue2劫持数据采用defineProperty。defineProperty有性能问题和缺陷
* Vue3中对模版编译进行了优化，对子节点的动态节点进行收集，减少比较，采用patchFlag标记动态节点
* Vue3采用compositionApi 进行组织功能，解决反复横跳，优化复用逻辑。相比Vue2的optionsApi 类型推断更方便