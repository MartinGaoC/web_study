1 基础数据类型

原始数据 七种
 number  用于表示整数和浮点数  NAN也属于number
 string  字符串类型
 null   表示一个可以设置为空的对象
 undefined  已经被声明  但是未被初始化
 Symbol   es6增加 独一无二的值，常用语表示对象的键
 boolean  布尔值
 bigint  es10新增 表示 大于2^53-1的数字


 引用类型

 Object  对象  最通用的引用类型
 Array   数组  特殊类型的对象，存储有序的数据集合
 funciton  函数   也属于对象
 特殊类型
 Date 日期
 RegExp  正则



2、 ES语法
# es6 
let const  变量以及常量  块级作用域 不会自动进行变量提升

箭头函数  this会自动指向上一级作用域

模版字符串   反引号的方式 可以输出${}类型的变量

... 结构赋值   对数组

Promise
* 字符串优化
    - 模版字符串
    - includes
    - startWith
    - enWith


# es7
includes 语法
** mi运算符

# es8

object.keys 返回给定对象的 key 数组形式
object.values 返回给定对象的 value 数组形式
object.entries  返回一个二维数组  包括key和value的数组
async await

# es9

object rest 当 对象的键值对不确定时，可以将必选的键赋值给变量，并用一个变量收集其余的可选键值对。

for await...of
用于处理异步迭代器的循环语句。它允许你以同步的方式处理异步数据流，非常适合处理需要逐步获取数据的场景。

 * Promise.prototype.finally() 方法返回一个 Promise，在 promise 执行结束时，无论结果成功与否，都会执行 finally 指定的回调函数。避免在 then() 和 catch() 中各写一次相同逻辑代码的情况。

 # es 10 

*  Object.fromEntries()
String.prototype.trimStart()方法会从字符串的开头移除空白字符，并返回一个新的字符串，而不会修改原始字符串。
trimEnd 方法会从字符串的结尾移除空白字符，并返回一个新的字符串，而不会修改原始字符串。trimRight() 是该方法的别名。
* Function.prototype.toString() Function 实例的 toString() 方法返回一个表示该函数源码的字符串。


# es11 
* .?
* ?? 可选链运算符允许读取位于连接对象链深处的属性的值
* BigInt  是一种内置对象，它提供了一种方法来表示大于 2^53 - 1 的整数
* Promise.allSettled() Promise.all() 具有并发执行异步任务的能力。然而，它的一个主要问题是，如果其中某个任务出现异常，所有任务都会失败，Promise 会直接进入 reject 状态。为了解决这个问题，我们需要一种机制，使得无论并发任务中某个任务是否成功，都能够返回对应的状态，这就是 Promise.allSettled 的作用。

# es12
* Dynamic Import   按需加载模块


# es 13 

* 类的私有属性  在属性或方法前添加一个#号，该属性或方法就会变成私有的。私有属性一旦定义，任何外部访问都会导致报错
* 类的静态属性 在属性或方法前添加一个 static，该属性或方法就会变成静态的。静态属性只能通过类名访问，不能通过实例访问。
* at() 方法   支持输入正数和负数 获取数组中的值

```
let arr = [1,2,3,4,5]  
console.log(arr.at(-1))  // 5 
```

# es 14

* Array.prototype.findLast()  反向迭代数组 返回满足要求的第一个值 没有则返回-1
* Array.prototype.findLastIndex() 反向迭代数组，返回满足要求的第一个索引， 没有返回-1
* Array.prototype.with()  通过索引修改制定的数组值
 


# new 关键词
 - 新生成一个对象
 - 链接到原型
 - 绑定this
 - 返回一个新对象

# apply call 和bind
 - 主要作用是用来改变函数执行是上下文中this的指向
 - 区别
 - apply 接收两个参数 第一个是this的新指向， 第二个是函数的参数数组。使用后立即执行 只会临时改变一次this指向
 - call  接收一个参数列表
 - bind 和其他两个参数不同 使用后不会立即执行 会返回一个改变了this指向的新函数

 # 事件代理
    - 用父级代替子级完成事件

# 面向对象
    - 面向对象是一种编程思想，相对于面向过程来说，面向对象会把属性和方法抽象成对象，让对象去解决问题。
    js中主要是用原型来实现
    三个特点
    - 封装不对外暴露隐藏的属性和方法
    - 可以实现继承
    - 多态 父类的接口也可以指向子类或者实例

# 阻止事件冒泡
    event.stopPropagation()
    event.preventDefault()
    return false

# await在等什么
    await在等等async函数的返回值

# 数组扁平化

let a = [1,2,[3,[4]]]
a.flat(Infinity)

递归处理

reducer处理

# 数组去重
 使用 new set 去处理
 单层for循环 includes 处理

 # 判断NAN
typeof判断类型是number  以及isNaN
利用NAN不等于自身的特性进行判断