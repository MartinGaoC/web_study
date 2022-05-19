// 解决循环引用的问题

let obj = {
    name: 'MartinGao',
    age: 25,
    hobby: ['LOL', 'A']
}
obj.obj = obj // 循环引用

function clone (target, map=new Map()) {
    if(typeof target === 'object'){
        let cloneTarget = Array.isArray(target) ? [] : {};
        if(map.get(target)){
            return map.get(target)
        }
        map.set(target, cloneTarget)
        for(const key in target){
            cloneTarget[key] = clone(target[key], map)
        }
        return cloneTarget
    } else{
        return target
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