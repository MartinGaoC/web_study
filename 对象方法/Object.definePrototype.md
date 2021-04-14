* 直接在对象上定义一个新属性，或者修改一个对象的现有属性，并返回该对象


## 语法
* Object.definePrototype(obj, prop, descriptor)
* obj 要修改的目标对象
* prop 要定义或者修改的属性的名称
* descriptor  配置项  
    - value  默认为undefined
    - writable 配置为true value才能被赋值运算符修改，默认false value属性不可写
    - Enumerable 属性 定义了对象的属性是否可以在for...in循环和Object.keys()中被枚举
    - Configurable 表示对象的属性是否可以被删除，以及除了value和writable特征外的其他属性是否可以被修改
    - get 方法
    - set 方法