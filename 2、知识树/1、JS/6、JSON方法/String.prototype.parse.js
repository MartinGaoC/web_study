// JSON对象只有parse 方法 和stringify方法，除了这两个方法，JSON这个对象本身没有其他作用，不能被调用或者作为构造函数使用


// 用来解析JSON字符串，构造由字符串描述的JavaScript值或对象，提供可选的reviver函数用以返回之前所得到的对象执行操作。


const jsons = '{"result": true, "count": 42}';

const obj = JSON.parse(jsons)

console.log(obj.result)


// 两个参数 第一个参数为要转换的值， 第二个如果传函数，可以用来修改解析生成的原始值