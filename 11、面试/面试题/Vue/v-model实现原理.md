实现原理
1.作用在普通表单元素上
动态绑定了input的value指向了message变量，并且在触发input事件的时候去动态把message设置为目标值

2.作用在组件上
在自定义组件中，v-model默认会利用名为value的prop和名为input的事件

本质是一个父子组件通信的语法糖，通过prop和$.emit来实现 因此父组件v-model语法糖本质上可以修改为<child :value="text" @input="function(e){text=e}"></child> 在组件的实现中，我们是可以通过v-model属性来配置子组件接收的prop属性以及派发的事件名称