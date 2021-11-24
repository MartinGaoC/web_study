let ary = [1,3,4,5,6,7]
const map1 = ary.map(x => x * 2);
console.log(map1)


let arr = [
    {key:1,value:10},
    {key:1,value:10},
    {key:1,value:10}
]

let reformattedArray = arr.map(function(obj){
    let rObj = {};
    rObj[obj.key] = obj.value
    return rObj;
})

console.log(reformattedArray)