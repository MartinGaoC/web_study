# 区别

* Vuex弱化了dispatch，通过commit进行store状态的一次变更，
* 取消了action概念
* 弱化reducer， 基于commit参数直接对数据进行转变 更加简易了


# 共同思想

* 单一的数据源
* 变化可以预测
* 本质上都是MVVM思想的服务
* 形式上Vuex借鉴了Redux 讲store作为全局的数据中心
