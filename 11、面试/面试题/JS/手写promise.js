// 1、 Promise是一个类，执行这个类的时候会传入一个执行器，这个执行器会立即执行
// 2、 Promise会有三种状态 源码默认在上方声明为常量，初始默认为pending还有Fulfilled成功和Rejected失败
// 3、 状态只能被改变一次，从pending到成功或者失败
// 4、 Promise使用resolve和reject两个函数来更改状态
// 5、 then方法内部做的事情就是状态判断，状态成功调用成功回调函数，失败调用失败函数

// 新建MyPromise

const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

// 为了处理异步逻辑，需要缓存成功与失败的回调


class MyPromise {
    constructor(executor){
        // executor 是一个执行器，进入会立即执行
        // 传入resolve和reject方法
        // 错误捕获
        try {
            executor(this.resolve, this.reject)

        } catch (error) {
            this.reject(error)
        }
    }

    // 存储状态的变量，初始值是pending;
    status = PENDING

    // 成功后的值
    value = null;

    // 失败后的值
    reason = null;


    // 存储成功回调  需要处理多个 所有变为数组
    onFulfilledCallbacks = [];
    // 存储失败回调
    onRejectedCallbacks = [];

    // resolve和reject为什么要用箭头函数？
    // 1、让this都指向当前类
    // 2、约束外部调用不能修改this指向
    resolve = (value) =>{
        // 状态必须为等待
        if(this.status === PENDING){
            // 状态修改为成功
            this.status = FULFILLED
            // 保存成功后的值
            this.value = value

            // 判断有没有缓存住的函数，如果有 说明是异步任务
            while(this.onFulfilledCallbacks.length){
                this.onFulfilledCallbacks.shift()(value);
            }
        }
    }
    reject = (reason) =>{
        if(this.status === PENDING){
            this.status === REJECTED
            this.reason = reason
            while(this.onRejectedCallbacks.length){
                this.onRejectedCallbacks.shift()(reason);
            }
        }
    }


    then(onFulfilled, onRejected){

        // 支持链式调用，返回promies，这里进行了递归调用
        const promiseThen = new MyPromise((resolve, reject)=>{
            // 执行器中的内容立即执行
            if(this.status === FULFILLED){
                // 获取成功函数的返回结果
                try {
                    const x = onFulfilled(this.value);
                    resolvePromise(x, resolve, reject)
                } catch (error) {
                    this.reject(error)
                }
            
            } else if(this.status === REJECTED){
                // 失败回调 返回值
                onRejected(this.reason)
            } else if(this.status === PENDING){
                this.onFulfilledCallbacks.push(onFulfilled)
                this.onRejectedCallbacks.push(onRejected)
            }
        })
        return promiseThen;
       
    }


    resolvePromise(x, resolve, reject){
        // 判断x是不是Mypromise 实例对象
        if(x instanceof MyPromise){
            x.then(resolve, reject)
        } else {
            resolve(x)
        }
    }
}

const promise = new MyPromise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('sucess')
    }, 1000)
   
})
promise.then((value)=>{
    console.log(1)
    console.log('resolve1', value)
},(reason)=>{
    console.log('reject', reason)
})
promise.then((value)=>{
    console.log(2)
    console.log('resolve2', value)
},(reason)=>{
    console.log('reject', reason)
})
promise.then((value)=>{
    console.log(3)
    console.log('resolve3', value)
},(reason)=>{
    console.log('reject', reason)
})