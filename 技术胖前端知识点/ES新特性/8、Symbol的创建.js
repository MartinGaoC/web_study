// Symbold 的创建

let s = Symbol()
let s2 = Symbol('1')
let s3 = Symbol('1')
console.log(s, typeof s) 
console.log(s2 === s3)   // 这种形式创建 值只是一个标识，和自己不相等
let s4 = Symbol.for('2');
let s5 = Symbol.for('2');
console.log(s4 === s5)   // 通过.for创建，两者相等。


let sum = s2 + 100
console.log(sum) // 不能参与各种运算


// 1、 Symbol 的值是唯一的，用来解决命名冲突的问题
// 2、 Symbol 的值不能与其他数据包括自己本身运算 
// 3、 Symbol 定义的对象属性不能使用 for...in遍历，但是可以使用Reflect.ownKeys来获取对象的所有键名

