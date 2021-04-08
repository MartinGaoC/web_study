// 返回一个新的 Array Iterator对象 ，这个对象包括索引键值对
let array = [{'age':1},{'name':2},{'lie':3}]
let a = array.entries()
console.log(a.next().value)



let array = [1,3,4]
let a = array.entries()
for(let e of a){
    console.log(e)
}

let arr = [{'age':1},{'name':2},{'lie':3}]
let iter = arr.entries();
let a = [];
for(let i = 0; i < arr.length + 1; i++){
    let tem = iter.next()
    console.log(tem.done)
    if(tem.done !== true){
        console.log(tem.value)
        a[i] = tem.value
    }
}
console.log(a)
