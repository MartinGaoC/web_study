# Vue原理
    - vue底层主要采用数据劫持 以及 发布订阅模式
    - 通过object.defineProperty 来劫持各个属性的set和get
Vue是一个典型的MVVM框架