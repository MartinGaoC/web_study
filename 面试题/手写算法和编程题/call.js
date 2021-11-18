function fun(arg1, arg2){
    console.log(this)
    console.log(this.name);
    console.log(arg1+ arg2)
}

let _demo = {name: 'YIYang'}

fun.call(_demo, 1, 2)
// this指向从函数 到对象

/**
 * 自定义实现call
 * @params context 上下文this对象
 * @params args    动态参数
 */

Function.prototype.ownCall = function (context, ...args){
    context= ( typeof context === 'object' ? context : window)
    // 防止覆盖原有的属性
    const key = Symbol()
    // 这里的this需要为执行方法
    context[key] = this
    // 方法执行
    const result = context[key](...args)
    delete context[key]
    return result
}