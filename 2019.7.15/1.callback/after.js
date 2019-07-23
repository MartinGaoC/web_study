// lodash after在执行多少次之后在执行

function after (times,callback) {
    return function (){
        if(--times === 0){
            callback();
        }
    }
}

let fn = after(3,()=>{
    console.log('执行三次以后才执行')
})

fn();
fn();
fn();