
//  node 方法 异步的i/o
//  异步代码会等待同步代码先执行
let fs = require("fs");

// function out (){
//     if(Object.keys(school).length == 2){
//         console.log(school)
//     }
// }

//  解决异步并发问题  计数器
function after(times,callback){
    let school = {}
    return function out (key, value) {
        school[key] = value
        if(--times === 0){
            callback(school)
        }
    }
}
let out = after(2,(school) => {
    console.log(school)
})

//   异步的并发问题
/
fs.readFile('./name.txt',function(err,data){
    console.log(data)
    out('name','珠峰');
});
fs.readFile('./age.txt',function(err,data){
    
    out('age',data);
});


// 分别读取name和age的属性，拿到最后的结果