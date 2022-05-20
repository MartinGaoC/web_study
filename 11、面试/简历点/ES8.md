# ES8
* 1、async await
* 异步编程的新解决方案
* 简化异步函数的写法，promise语法糖，让异步代码像同步代码一样
    - async 函数
    - 默认返回一个promise对象，只要返回的不是promise对象，都是返回默认成功态的promise对象
    - 返回的是一个promise对象的话，返回的promise结果会套用返回promise的状态
    - await 表达式
    - await必须写在async 函数中（单向依赖）
    - await右侧一般promise对象
    - await 会返回promise的结果，但是错误需要通过try catch进行捕获




* 2、对象方法的扩展
    - object.key()  返回数组的key
    - object.values()，返回一个数组，里边包含数组的值
    - object.entries(), 返回一个二维数组，子数组里包含了对象的key和value 方便生成map
    - object.getOwnPropertyDescriptors      返回一个包含对象属性描述的对象，作用是克隆对象时为新对象也创建蕾丝属性
    ```
    {
        name: { value: '訾博',
            writable: true,  // 是否可写
            enumerable: true, //  是否可以枚举
            configurable: true // 是否可删除
         },
        age: { value: 24, writable: true, enumerable: true, configurable: true },
        sex: { value: '男', writable: true, enumerable: true, configurable: true }
    }
    ```