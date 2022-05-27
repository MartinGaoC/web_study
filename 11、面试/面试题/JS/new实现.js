// New 的实现
// 1、创建一个新的空对象
// 2、空对象的__proto__指向传入函数的prototype
// 3、将传入的构造函数中的this指向obj，执行函数构造代码，获取返回值, 使用apple把构造函数挂到新的对象上然后执行，
// 参数也就一并赋上去了
// 4、最后判断一下函数的返回值，如果是引用类型，就返回这个引用类型的对象


Function.prototype.MyApply = function (context) {
    if(typeof this !== 'function'){
        return new Error('type error')
    }
    let result= null;
    context = context || window;

    const fnSymbol = Symbol()
    context[fnSymbol] = this;
    if(arguments[1]){
        result = context[fnSymbol](...arguments[1])
    } else {
        result = context[fnSymbol]()
    }
    delete context[fnSymbol]
    return result
}




function MyNew(context){
    const obj = new Object();
    obj.__proto__ = context.prototype;
    const res = context.MyApply(obj, [...arguments].slice(1))
    return res instanceof Object ? res : obj
}


function Martin (age, name){
    this.age = age
    this.name = name
}



const gao = MyNew(Martin, 18, 'gc')
console.log(gao)

