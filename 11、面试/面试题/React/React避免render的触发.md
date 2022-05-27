# shouldComponentUpdate和PureComponent

- shouldComponentUpdate 判断组件接收外部的最新属性是否是新的 返回结果为false和true 不是最新的返回false 子组件就不会因为父组件的改动重写render

# PureComponent

- 内部机制通过浅比较实现，PureComponent代表纯组件，纯组件内部不能复写shouldComponentUpdate这个钩子函数。外部传入属性和内部不一致会进行更行ß

# 利用高阶组件

- 函数组件中没有PureComponent 需要利用高阶组件自己封装

# 使用React.memos