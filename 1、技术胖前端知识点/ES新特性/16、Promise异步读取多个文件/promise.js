const fs = require('fs');
// fs.readFile('./resources/ECMAScript.md', (err, data1)=>{
//     // console.log(data.toString())
//     fs.readFile('./resources/箭头函数.md', (err, data2)=>{
//         // console.log(data.toString())
//         fs.readFile('./resources/箭头函数的实践.md', (err, data3)=>{
//             // console.log(data.toString())
//             console.log(`${data1}\r\n${data2}\r\n${data3}`)
            
//         })
//     })
// })




const p = new Promise(function(resolve, reject){
    fs.readFile('./resources/ECMAScript.md', (err, data) =>{
        if(err) reject(err)
        resolve(data)
    })
})

p.then((value)=>{
    // console.log(value.toString())
    return new Promise((resolve, reject)=>{
        fs.readFile('./resources/箭头函数.md', (err, data) =>{
            if(err) reject(err)
            resolve([value, data])
        })
    })
    
    
  
}).then((value)=>{
    return new Promise((resolve, reject)=>{
        fs.readFile('./resources/箭头函数的实践.md', (err, data) =>{
            if(err) reject(err)
            value.push(data)
            resolve(value)
        })
    })
    // fs.readFile('./resources/箭头函数的实践.md', (err, data) =>{
    //     let a = value.push(data)
    //     console.log(typeof a)
    //     console.log(value.join('\n\r'))
    //     console.log(data.toString())

    // })
}).then((value)=>{
    console.log(value.join('\r\n'))
})