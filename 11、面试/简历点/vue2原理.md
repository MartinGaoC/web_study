# Vue2.0
* 1、当创建一个Vue实例时，Vue会遍历data的属性
* 2、用Object.defineProperty()(Vue3使用proxy)将他们转化为getter/setter并且内部追踪相关依赖
* 3、当属性被访问或者修改的时候通知变化，每个组件实例都有相应的watcher
* 4、在组件渲染的时候把属性记录为依赖
* 5、当依赖项的setter重新调用的时候，通知watch重新计算。致使关联的组件更新。