// 扩展运算符

// 1、数组合并

let qicheren = ['擎天柱', '大黄蜂']
let batianhu = ['威震天', '路障']


console.log(qicheren.concat(batianhu))  // es5 方式

console.log([...qicheren,...batianhu]) // 扩展运算符方式


// 2、数组克隆

let hosts = ['local','127']
let hosts2 = [...hosts]
console.log(hosts2) // 不具有引用类型就是深拷贝， 否则为浅拷贝


// 3、伪数组变为真的数组

function fn (){
    console.log([...arguments], arguments) // 因为有rest参数的存在 尽量使用rest
}
console.log(fn(1,2,3))