# Redux和Vuex区别
Vuex改进了Redux中的Action和Reducer函数，以mutations变化函数取代Reducer，无需switch，只需在对应的mutation函数里改变state值就可以
Vuex由于Vue自动重新渲染的特性，无需订阅重新渲染函数，只要生成新的state就可以
Vuex数据流的顺序是:View调用store.commit提交对应的请求到Store中对应的mutation函数 -- store改变(vue检测到数据变化自动渲染)
* 通俗理解就是:Vuex弱化dispatch，通过commit进行store状态的一次变更；取消了action概念，不必传入特定的action形式进行指定变更；弱化reducer，基于commit参数直接对数据进行转变，使得框架更加建议

# 共同思想
单一的数据源

变化可以预测

本质上:Redux和Vuex都是对MVVM思想的服务，将数据从视图中抽离的一种方案

形式上:Vuex借鉴了Redux，将store作为全局的数据中心，进行数据管理


