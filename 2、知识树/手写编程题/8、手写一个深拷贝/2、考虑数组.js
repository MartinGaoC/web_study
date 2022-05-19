// 兼容数组的写法

let obj = {
    name: 'MartinGao',
    age: 25,
    hobby: ['LOL', 'A']
}
function clone(target){
    if(typeof target === 'object'){
        let cloneTarget = Array.isArray(target) ? [] : {}; // 考虑数组
        for(let key in target){
            cloneTarget[key] = clone(target[key])
        }
        return cloneTarget
    } else {
        return target
    }
}   

let deepObj = clone(obj)
deepObj.age = 26
deepObj.hobby[0] = '赚钱'
console.log(obj)
console.log(deepObj)