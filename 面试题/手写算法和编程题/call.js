
/**
 * 自定义实现call
 * @params context 上下文this对象
 * @params args    动态参数
 */

Function.prototype.ownCall = function (context, ...args){
    console.log(context,'context')
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


Function.prototype.mycall = function (context, ...ags){
    context = typeof context === 'object' ? context : window
    const key = Symbol()
    context[key] = this
    const result = context[key](...args)
    delete context[key]
    return reslut
}




function fn (){
    this.name = 1

}

function fn2(){
  fn.call(this)
  console.log(this.name)
}

 fn2()

