# ES6
* 1、Promise 
* ES6处理异步的新解决方案
* 处理回调地狱的问题
    - Promise是一个构造函数，通过它可以实例化对象，参数是一个函数，函数的参数也是两个函数分别是成功态reslove和失败态reject
    - then方法，接收两个函数参数，第一个返回值为成功，第二个返回值为失败。then方法的返回结果也是一个promise对象，返回结果由回调函数的执行结果来决定
    - catch方法


* 2、Set
* 类似数组，但是成员都是唯一的
* 实现了inerator（迭代器） api
    - size  长度
    - add   增加元素
    - delete 删除元素
    - has    判断元素是否存在 返回boolear值
    - clear  清除


* Map
* 存储键值对的组合、键的范围不限于字符串，对象也可以
* 实现了inerator（迭代器）api
    - size 长度
    - set  增加元素
    - get  返回键值
    - has  检查是否存在某元素
    - clear 清空集合

