// 引入fe模块

const fs = require('fs');

// 2、调用fe方法读取文件
// fs.readFile('./resources/ECMAScript.md', (err, data)=>{
//     if(err) throw err;
//     console.log(data.toString())
// })

// 通过promise封装

const p = new Promise(function(resolve, reject){
    fs.readFile('./resources/ECMAScript.md', (err, data)=>{
        if(err) reject(err)
        resolve(data)
    })
})


p.then(function(value){
    console.log(value.toString())
}, function(err){
    console.error(err)
})