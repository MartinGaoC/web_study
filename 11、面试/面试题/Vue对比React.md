# 设计思想
- React官网介绍React是一个用于构建用户界面的 JavaScript 库。React推荐JSX + inline style, 也就是把HTML和CSS全都写进JavaScript了,即 ”all in js“，HTML和css都可以放到js中。React主张函数编程，推荐使用纯函数，数据不可变，单向数据流，但是可以手动编写onChange等事件处理函数实现双向数据流。结合JSX轻松实现渲染模板

- Vue官网介绍Vue是一套用于构建用户界面的渐进式框架,与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue保留了html、css、js分离的写法，使得现有的前端开发者在开发的时候能保持原有的习惯，更接近常用的web开发方式，模板就是普通的html，数据绑定使用mustache风格，样式直接使用css。Vue认为数据是可变的，使用v-model实现双向数据流。


# 组件通信方式
- React组件通信的几种方式：

- 父子组件通信：props
兄弟组件(非嵌套组件)：消息订阅-发布（pubs-sub)、集中式管理(redux、dva)
祖孙组件(跨级组件)：消息订阅-发布（pubs-sub)、集中式管理(redux、dva)、Context(生产者-消费者模式，用的少)
Vue组件通信的几种方式：

- 父子组件通信：props与自定义事件
兄弟组件(非嵌套组件)：全局事件总线、消息订阅-发布（pubs-sub)、集中式管理(vuex、redux)
祖孙组件(跨级组件)：全局事件总线、消息订阅-发布（pubs-sub)、集中式管理(vuex、redux)、provide/inject


# 社区支持 
* react JS是由Facebook、创建的，拥有大量的贡献者以及一个庞大的开发者社区
* Vue  的市场占有率较高，社区资源也有大量的支持者
* 

相同点

组件化思想
虚拟dom 渲染组件

数据流

vue: 双向绑定
react 单向数据流

模板语法

vue: 采用的是template模板语法，团队代码管理比较规范
react: 采用的是jsx语法，灵动性更强

diff算法

vue: 采用的是「链表」， 边比较，边更新
react: 采用的是「队列」，将需要更新的dom统一放入队列，再统一操作更新dom

事件机制

vue: 采用的是web的原生事件
react: 采用的是混合事件，需要将事件冒泡，再通过事件委托的方式进行处理

vue virtual DOM 和 react virtual DOM 区别？

vue 虚拟dom原理

跟踪组件间的依赖关系， 需要要重新渲染整个组建树
复制代码

react 虚拟dom原理

当状态改变时，组件都需要

