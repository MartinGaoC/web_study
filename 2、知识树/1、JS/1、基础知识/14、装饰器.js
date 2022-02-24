//   装饰模式  aop 高阶函数

// 包装类  包装类中的属性  类中的方法  只能放在类的属性和函数中

// 装饰类  可以在类上扩展一些方法或者属性



// @enumerable  不可枚举


class Animal{
    @enumerator
    @readonly
    PI = 3.4
    @beforeSay
    say(){
        console.log('eat')
    }
}

function beforeSay(target,key,descriptor) {
// target  Animal的原型
// key  say函数
}
let animal = new Animal()
console.log(animal.PI)


// 如果装饰器是函数  会直接执行  内部装饰类的时候 会从内部依次传递到外边（洋葱机制）    先从上到下

// mixin 混合   怎么实现类的混合  属性的混合  Vue.minxin()

