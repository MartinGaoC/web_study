// 迭代器的概念
// 迭代器（Iterator) 是一种接口，为各种不同数据结构提供同意的访问机制。
// 任何数据只有部署Iterator接口，就可以完成遍历操作

// 1 es6创造了一种新的 遍历命令 for...of循环  Iterator 接口主要供for...of消费
// for...of 返回对象的键值  for...in返回对象的键名

// 2 原生具备iterator接口的数据（可以使用 for...of消费）

Array

Arguments

Set

Map

String

TypedArray

NodeList


let xiyou = ['唐僧', '悟空', '八戒', '沙僧']
for(let v of xiyou){
    console.log(v, 'v')
}
console.log(xiyou)

// 工作原理， 每个Iterator迭代器都会在对象上 使用这种写法 Symbol.interator  挂载一个方法

// 创建一个指针对象，指向当前数据结构的起始位置
// 第一次调用next方法，指针自动指向数据结构的第一个成员
// 接下来不断调用next方法，指针一直向后移动
// 每调用一次next方法 返回一个 value和done属性的对象。
// 需要自定义遍历数据的时候 想到要使用迭代器。