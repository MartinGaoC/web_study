// Symbol

let obj1 = {
    up: function (){
        console.log('up')

    },
    down: function (){
        console.log('down')

    }
}


let method = {
    up: Symbol('say'),
    down: Symbol()
}

obj1[method.up] = function (){
    console.log('上升')
}
obj1[method.down]= function (){
    console.log('下降')
}

console.log(obj1[method.up](), 'obj1') // 调用方式


let youxi = {
    name: '狼人杀',
    [Symbol('say')]: function (){
        console.log('发言')
    },
    [Symbol('zibao')]: function (){
        console.log('我是狼人')
    }
}

const langrensha = Object.getOwnPropertySymbols(youxi);  // 方法一  只抽取Symbol方法返回一个数组
console.log(langrensha)

youxi[langrensha[0]]()

const langrensha1 = Reflect.ownKeys(youxi);  // 抽取对象中所有属性 返回一个数组
console.log(langrensha1);
youxi[langrensha1[2]]()