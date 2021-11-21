*  变量提升在 创建变量之前 获取变量 会发生什么？

* var 会在初始化阶段就会显示 undefined
* javascript在编译阶段，会找到所有的var添加到语法环境中，并初始化一个undefined
```
console.log(a) // undefined
var a
```

* let和const也会进行变量提升，但是是到赋值阶段 如果还没有找到值的话才会赋一个undefined
```
console.log(a)  // 报错
let a = '1'
console.log(a)  // 1
```

* 在执行阶段，如果发现变量没有被赋值，才会给一个默认的undefined。