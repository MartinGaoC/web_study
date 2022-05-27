# 用法
* 在 Vue 里面只有 data 中已经存在的属性才会被 Observe 为响应式数据，如果你是新增的属性是不会成为响应式数据，因此 Vue 提供了一个 api---vm.$set----来解决这个问题

# 原理
* vm.$set()在 new Vue()的时候被注入到 Vue 的原型上


从中可以看出 set 主要逻辑如下：

开始判断类型

target 为数组：调用 splice 方法

target 为对象，并且 key 不是原型上的属性进行直接修改

target 不是 Vue 实例或 Vue 实例的根数据对象，否则报错

target 是非响应式数据时，就按照普通对象添加属性的方式来处理

target 为响应式数据，并且 key 为新增属性，key 设置为响应式，并且手动触发其属性值的更新

总结
vm.$set(target,key,value)

当 target 为数组时，直接调用数组方法 splice 实现

如果目标是对象，会先判断属性是否存在、对象是否为响应式

最终结果要对属性进行响应式处理，则是通过调用defineRective方法进行响应式处理

definedReactive 方法就是 Vue 在初始化对象时，给对象属性采用Object.defineProperty动态添加 getter 和 setter 的功能所调用的方法