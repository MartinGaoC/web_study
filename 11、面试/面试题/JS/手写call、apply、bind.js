// call 方法思路
// 改变this指向
// 执行fn函数
// 1、首先考虑改造obj 然后增加obj上的fn方法


var obj = {
    value: '123'
}
function fn(){
    console.log(this.value)
}


// 模拟在Function原型上新建对象

Function.prototype.MyCall = function(context){
    console.log(this,'this')
    console.log(context, 'context')
    console.log(...arguments, 'arguments') // 函数会把传入的参数都存到arguments里
    // 判断调用对象是否是函数
    if(typeof this !== 'function'){
        throw new Error('type error')
    }
    // 从arguments中获取参数
    let args = [...arguments].slice(1)
    console.log(...args, 'args') 
    // 设置返回空变量
    let result= null;
    // 判断context是否传入，没有传就设置为window
    context = context || window
    // 讲现在调用call方法的this函数 赋值给context对象的属性
    context.fn = this;
    // 执行这个对象属性
    result = context.fn(...args)
    // 删除手动增加的犯法
    delete context.fn;
    // 返回执行结果
    return result
}


// 和call的区别是使用Symbol进行属性的唯一性赋值
Function.prototype.MyApply = function (context) {
    if(typeof this !== 'function'){
       return  new Error('type error')
    }
    let result = null;
    context = context || window

    const fnSymbol = Symbol()
    context[fnSymbol] = this
    if(arguments[1]){
        result = context[fnSymbol](...arguments[1])
    } else {
        result = context[fnSymbol]()
    }
    delete context[fnSymbol]
    return result
}





// bind返回的是一个函数

Function.prototype.Mybind = function (context){
    if(typeof this !=='function'){
        return new Error('type error')
    }

    // 获取参数
    const args = [...arguments].slice(1);
    const fn = this;
    return function Fn (){
        return fn.apply(
            this instanceof Fn ? this : context,
            args.concat(...arguments)
        )  
    }
}



fn.MyApply(obj)





