### Object.freeze 
* 对象冻结：内容不允许被扩展和修改，此方法返回的冻结对象是浅冻结


```
const obj = {
    a: 1,
    b: 2
}

function myFreeze(obj){
    if(obj instanceof Object){
        for(let key in obj){
            if(obj.hasOwnProperty(key)){
                Object.defineProperty(bbj, key, {
                    wriable: false  // 设置为只读
                })
            }
        }
        Object.seal(obj)

    }
    return obj
}
```

* instanceof 检测构造函数的prototyp属性是否出现在某个实例的原型链上
* Object.defineProperty()  在对象上定义一个新属性，或者修改一个对象的现有值，并返回该对象
* Object.seal()  封闭一个对象，组织添加新属性，并将现有属性标记为不可配置
* hasOwnProperty  指示本身对象中是否含有这个值
