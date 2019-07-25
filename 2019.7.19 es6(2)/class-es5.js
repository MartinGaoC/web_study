//  es5 构造函数  模拟类  函数的名字大写

function Animal(){
    this.type = '哺乳类';
    return {
        a: 1
    }
}
// 具体的一个实例
// 私有属性 外卖拿不到
/**
 * 1.实例上的属性
 * 2.公共属性
 * 3.静态方法  静态属性 只能通过类调用
 */

let  animal = new Animal();

console.log(animal)

// 每个对象都有一个__proto__ 找所属类的prototype

console.log(animal.__proto__ == Animal.prototype);
console.log(Animal.prototype.__proto__ == Object.prototype)
console.log(Object.__proto__ == Function.prototype)
console.log(Function.__proto__ == Function.prototype)
console.log(Object.__proto__ == Function.__proto__)

// constructor
console.log(Animal.prototype.constructor === Animal)
console.log(animal.constructor)


// 继承

function Animal () {
    this.type = '哺乳类'
}


Animal.prototype.eat = function(){
    console.log('吃饭')
}

function Tiger(){
    Animal.call(this)
}

// 老虎增加原型方法，然后还可以找到Animal的原型
Tiger.prototype.__proto__ = Animal.prototype
Object.setPrototypeOf(Tiger.prototype,Animal.prototype) /z/ es6写法
let tiger = new Tiger();