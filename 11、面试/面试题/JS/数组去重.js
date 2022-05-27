// 1、 使用set数据结构去重

let arr = [1,2,2,3,6,4,4]

console.log([...new Set(arr)])

// 2、利用reducer方法+includes

function unipue(arr){
    arr.reducer((prev,cur)=>{
        
    })
}
console.log(unipue(arr))


//方法3
let uniqueThree = arr => {
    let brr = []
    arr.forEach(item => {
        // 使用indexOf 返回数组是否包含某个值 没有就返回-1 有就返回下标
        if(brr.indexOf(item) === -1) brr.push(item)
        // 或者使用includes 返回数组是否包含某个值 没有就返回false 有就返回true
        if(!brr.includes(item)) brr.push(item)
    })
    return brr
}
console.log(uniqueThree(arr))


//方法4
let uniqueFour = arr => {                                         
    // 使用 filter 返回符合条件的集合
   let brr = arr.filter((item,index) => {
       return arr.indexOf(item) === index
   })
   return brr
}

