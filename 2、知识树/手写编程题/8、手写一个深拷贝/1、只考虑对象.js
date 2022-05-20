// 浅拷贝和深拷贝的区别
// 都是创建一份数据的拷贝
// ## 深拷贝是什么，将一个对象从内存中完整的拷贝一份出来，从堆内存中开辟一个新的区域存放新对象，且修改新对象不会影响原对象

// * JS分为原始类型和引用类型，对于原始类型的拷贝，并没有深浅拷贝的区别，我们讨论的深浅拷贝都只针对引用类型

// 深、浅拷贝都复制了值和地址，都是为了解决引用类型赋值后相互影响的问题
// 浅拷贝只进行一层复制
// 深拷贝无限层级拷贝

// 浅拷贝的实现方式
// Object.assign()
// 展开运算符 ...
// Array.prototype.concat()
// Array.prototype.slice()

// 深拷贝的实现方式
// 乞丐版
// 优点，简单
// 缺点：拷贝其他引用类型、拷贝函数、循环引用等情况
// JSON.parse(JSON.stringify())

// 实现一个深拷贝

let obj = {
    name: 'MarintGao',
    age: '25'
}
function clone(target){
    if(typeof target === 'object'){
        let cloneTarget = {}
        for(let key in target){
            cloneTarget[key] = clone(target[key])
        }
        return cloneTarget
    } else {
        return target
    }
}
let deepObj = clone(obj)
obj.name = '高超'

console.log(obj)
console.log(deepObj)


// let obj = {
//     name: 'MarintGao',
//     age: '25'
// }
// let n = {name: obj.name}
// n.name = "高超"
// console.log(obj.name)