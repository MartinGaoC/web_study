// JSON对象只有parse 方法 和stringify方法，除了这两个方法，JSON这个对象本身没有其他作用，不能被调用或者作为构造函数使用


// JSON.stringify
// 作用：将对象值转为JSON字符串的方法，

// 特性1、将布尔值、数字、字符串的包装对象在序列化过程中自动转化成对象的原始值
// 特性2、 NAN、undefined、-Infinity以及null在经过序列化后都会变成null
// 特性3、undefined、function、symbol作为对象的key或value时，会在序列化的时候被忽略

// JSON.stringify 和遍历的时间相差近五倍，用json的api底层也是遍历，并且转成字符串，所以性能会比较差