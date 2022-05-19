// WeakMap优化


// WeakMap解释，WeakMap对象也是键/值对的集合,键是弱引用、键必须是对象，值可以是任意的
// 弱引用：会在一段时间后被垃圾回收机制回收。适合这种被循环引用自己的场景
let obj = {
    name: 'MartinGao',
    age: 25,
    hobby: ['LOL', 'A']
}
obj.obj = obj // 循环引用

function clone (target, map = new WeakMap()){
    if(typeof target === 'object'){
        let cloneTarget = Array.isArray(target) ? [] : {}
        if(map.get(target)){
            return map.get(target)
        }
        map.set(target, cloneTarget)
        for(let key in target){
            cloneTarget[key] = clone(target[key], map)
        }
        return cloneTarget
    } else {
        target
    }
}
let deepObj = clone(obj)
deepObj.age = 26
deepObj.hobby[0] = '赚钱'
console.log(obj)
console.log(deepObj)

// 使用Map 数据结构判断
// 检查map中有无克隆过的对象
// 有就直接返回
// 没有就将当前对象作为key，克隆对象作为value存储