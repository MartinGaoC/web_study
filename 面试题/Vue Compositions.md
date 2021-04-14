### componsition 出现的原因

* 代码不够

### componsition 本质上就是vue抽离了一系列方法可以供我们自由引入组合使用


# setup函数

* vue3 中专门为组件提供的新属性，为新特性提供统一的入口，使用新特性都要在这个函数里进行
    - 执行时机： setup函数会在deforeCreate()之后和create()之前
    - 参数 第一个形参，接受props参数 第二个是参数是context属性
    - 创建响应数据声明的函数 ref() reactive()

* setup函数中的生命周期与旧的生命周期函数的对应关系
```
    beforeCreate() --- setup()
    created() --- setup()
    beforeMount() --- onBeforeMount()
    mounted() --- onMounted()
    beforeUpdate() --- onBeforeUpdate()
    update() --- onUpdate()
    beforeDestory() --- onBeforeUnmount()
    destoryed() --- onUnmounted()
    errorCaptured() --- onErrorCaptured()
```