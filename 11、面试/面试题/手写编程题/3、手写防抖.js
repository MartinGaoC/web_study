// 放抖原理  一段时间内触发的事件，都在触发后n秒后执行


function dedounce(func, wait, immediate){
    var timeout; 
    return function(){
        let context = this;
        let args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(()=>{
            func.apply(context, args)
        }, wait)
    }
}