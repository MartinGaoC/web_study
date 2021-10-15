### 优化部分
1. 对象属性变量式声明
    - 直接通过变量形式声明对象属性或方法
    ```
    let [apple, name] = ['red appe', 'yellow orange']
    let myFruits = {apple, name}
    ```
2. 对象解构赋值
    - 对象的进行变量的解构赋值
    ```
    let {apple, name} = {apple: 'red appe', name: 'yellow orange'}
    
    ```
3. 对象的扩展运算符
   - 取出对象中的单个或部分属性，进行对象的合并分解

   ```
   let { a, b , ...c} = {a: 1, b: 2, grape: 'name', peach: 'sweet peach'} 
   ```
4. super关键字，类似this。总是指向当前函数所在对象的原型对象



### 升级部分


1. ES6在Object原型上新增了is()方法，做两个目标对象的相等比较
2. ES5在Object原型上新增了assign()方法，用于对象新增属性或多个对象的合并
```
const target = { a: 1};
const source = { b: 2};
const sourse = { c: 3};
Object.assign(target, source, sourse);
```
 * 注意只会合并自身的属性，不会合并继承的属性。也不会合并无法枚举的属性，且无法正确复制set和get方法

 3. ES6在Objec原型上新增了getOwnPropertyDescriptors()方法，该方法增强了ES5中getOwnPropertyDescriptor()方法，可以获取指定自身属性的描述对象，结合defineProperties()方法，可以完美复制对象。包括复制get和set属性

 4. ES6在Object原型上新增了getPrototypeOf()和setPrototype()方法，用来获取或设置当前对象的prototype对象，这个方法存在的意义在于ES5获取设置prototype对象是通过__proto__属性并不是ES规范中的明文规定属性，是浏览器各大厂商私自加上去的，应为适用范围广被默认适用了，在非浏览器环境中并不一定可以适用。为了稳妥起见，获取或设置当前对象的prototype对象时，采用es6新增的标准用法。

 5. ES6在Object原型上新增了Object.key(), Object.value(), Object.entries()方法，用来获取对象所有键，所有值，和所有键值对数组。