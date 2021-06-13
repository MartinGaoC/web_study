 // 创建数组

let array = {
    0:'name',
    1:'age',
    2:['user1','user2'],
    'length':3
}

let arr = Array.from(array)
console.log(arr)  //  ['name','age',['user1','user2']]

let array = {
    'name':'name',
    'age':'age',
    'user':['user1','user2'],
    'length':3
}
let arr = Array.from(array)
console.log(arr)  //  ['undefined','undefined','undefined']


let arr = [1,2,3,4,5,6,7]
let set = new Set(arr)
console.log(set,Array.from(set,item => item+1)) //[ 2, 3, 4, 5, 6, 7, 8 ]

let str = 'hello world'
console.log(Array.from(str))


const map = new Map().set(true,7)
console.log(map)
console.log(...map)
//Map { true => 7 }
// [ true, 7 ]



// 把类似数组的 类数组对象 转换为数组，返回一个新的数组
// 参数
// 想要转换为数组的伪数组对象，  必须
// callback   循环数组的每一项
// 回调函数的this对象




