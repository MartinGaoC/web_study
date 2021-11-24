// 判断数组里的每个值是否都能通过测试 ， 参数是一个函数  返回一个布尔值
function isBelowThreshold(currentValue,index,arr){
    console.log(currentValue,index,arr)
    return currentValue < 40;
}

let array = [1,30,34,23,4]

console.log(array.every(isBelowThreshold))