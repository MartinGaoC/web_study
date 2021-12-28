
var fs = require('fs');


//  希望两次都完成后 分别打印最终结果  再打印一次已经处理完毕

// 发布订阅    一种  一堆多的关系【fn,fn,fn】

class Events {
    constructor(){
        this.stack = [];
    }
    on(callback){
        this.stack.push(callback);
    }
    emit(){
        this.stack.forEach(callback=>{
            callback()
        })
    }
}


let events = new Events();
let school = {};
// 前端和服务端很多原理都基于 发布订阅模式
events.on(function(){
    if(Object.keys(school).length === 2){
        console.log(school)
    }
})
events.on(function(){
    console.log('当前获取完毕')
})

fs.readFile('./name.txt',function(err,data){
    school.name = data;
    events.emit();
});
fs.readFile('./age.txt',function(err,data){
    school.age = data;
    events.emit();
   
});

