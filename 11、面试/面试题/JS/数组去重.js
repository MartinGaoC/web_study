// 1、 使用set数据结构去重

let arr = [1,2,2,3,6,4,4]

console.log([...new Set(arr)])

// 2、利用reducer方法+includes

function unipue(arr){
    arr.reducer((prev,cur)=>{
        
    })
}
console.log(unipue(arr))