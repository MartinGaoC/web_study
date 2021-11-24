# const 特性

* 1、必须要赋初始值，否则会报错
* 2、潜规则需要用大写命名
* 3、块级作用域，不能变量提升
* 4、如果值是对象或者数组，可以进行push等操作，修改里边的值，因为没有改变指向的地址。但是重新赋值会改变引用地址，会报错。


# const的实现方法
* const 需要使用definePrototype的配置项来进行控制，使变量的值不能被重新赋值

```
function _const(data, value){
    Object.definePrototype(window, data,{
        enumerable: false,
        configgurable: false,
        get: function(){
            return value
        },
        set: function (data) {
            throw new TypeError("Assignment to constant variable.");
        }
    })
}


function _const(data, value){
    Object.definePrototype(window, data, {
        enumerable:false,
        configgurable: false,
        get: function(){
            value
        },
        set: function(data){
            throw new TypeError("Assigment to constant variable")
        }
    })
}
```