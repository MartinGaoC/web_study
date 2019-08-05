function isBelowThreshold(currentValue,index,arr){
    console.log(currentValue,index,arr)
    return currentValue < 40;
}

let array = [1,30,34,23,4]

console.log(array.every(isBelowThreshold))