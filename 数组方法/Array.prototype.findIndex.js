let arr = [1,2,3,4,4,5,6]
function isLargenuNumber(element, index, arr){
    return element > 4
}
console.log(arr.findIndex(isLargenuNumber))