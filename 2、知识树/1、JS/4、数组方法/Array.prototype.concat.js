// 数组合并  合并两个或多个数组， 返回一个新的数组 不会改变原数组
let arr = [1,2,3]
let arrNew = arr.concat([12,[23]],{a:12,b:{c:3}})
arr[0] = 100
console.log(arr) //[ 1, 2, 3, 12, [ 23 ], { a: 12, b: { c: 3 } } ]

console.log(arrNew) 

// 参数  可选的合并对象，如果不传，则返回一个浅拷贝的新数组


