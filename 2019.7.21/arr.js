// map reduce  (filter some every forEach)


//  reduce   求和

let total = [1,2,3,6,7].reduce((prev, current, Index, arr)=>{
    //  prev是每次循环后都和完的值
    // current是下一次要被和的值
    //  index 每次循环的索引
    // arr   原数组
    return prev + current
})


let total = [{price: 10,count:1},{price: 10,count:1},{price: 10,count:1}].reduce((prev, current, Index, arr)=>{
    //  prev是每次循环后都和完的值
    // current是下一次要被和的值
    return prev + current
},0)
//  这个0 是定义prev每次+的值


//  compose组合  可以将多个函数进行组合


function sum (a,b,c){
    return a,b,c
}
function len(str){
    return str.length;
}
function addTag(str){
    return '$' + str
}

let r =  addTag(len(sum('a'+'b'+ 'c')))


//  运行方向从右到左
// componse(addTag,len,sum)('a','b','c') 

// function componse(...fns){
//     return function (...args){
//          let lastFn = fns.pop();
//         return fns.reduceRight((prev,current)=>{
//             return current(prev)
//         },lastFn(...args))
        
//     }
// }

function componse(...args){
    return fns.reduce((prev,next,index,current) =>{
        return function(...args){
            return prev(next(...args))
        }
    })
}
//  reduce 方法函数不能为空
let r = componse(addTag,len,sum)('a','b','c') 




Array.prototype.reduce = function(callback,prev){
    for(let i = 0; i < this.length; i++){
        return callback(this[i],this[i+1],this)
    }
}
