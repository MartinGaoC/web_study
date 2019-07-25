// Object.defineProferty get / set
// 不能监听数组的变化 push  shift

// proxy
// 支出数组和对象

let obj = { // 如果对象上不存在某个属性
    name:"zf"
}
let proxy = new Proxy(obj,{
    get(target,key){
        return Reflect.get(target,key)
        // return target[key]
    },
    set(target,key,value){
        target[key] = value
        return Reflect.set(target,key,value)
    }
})

// vue 时候 必须保证先声明再使用
console.log(proxy.name)
proxy.age = 10
console.log(obj);



// es6模块 esmodule规范 静态  代码执行前先导入    node模块（commonjs规范）  动态 代码执行可以导入
// import   export

// 模块化的好处 封装   保护变量名不冲突
// import  有声明变量的功能，会变量提升和var很像  不能重复声明

// 实验型语法里 import() 动态的导入

if(true){
    import('./a').then(data=>{
        console.log(data)
    })
}