// 数组扁平化，多维数组拍平

// reduce方法实现
function flat(arr, depth =1){
    if(depth > 0) {
        return arr.reduce((pre, cur) =>{
            console.log(pre,'pre')
            console.log(cur)
            return pre.concat(Array.isArray(cur) ? flat(cur, depth -1): cur)
        }, [])
    }
}


// 使用for循环的方式 递归处理

function forFlat(arr){
    var res = []
    for(let i = 0, length = arr.length; i < length; i++){
        console.log(arr[i])
        if(Array.isArray(arr[i])){
            res = res.concat(forFlat(arr[i]))
        } else {
            res.push(arr[i])
        }
    }
    return res

}



// ES6数组新方法flat 
