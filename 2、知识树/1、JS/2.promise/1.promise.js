
let Promise = require('./promise')

let p = new Promise ((resolve,reject)=>{
    console.log('executor')
    resolve('赚钱了')
    reject('没钱了')
})

p.then((value)=>{
    console.log('成功' + value)
},(reason)=>{
    console.log('失败' + reason)
})


