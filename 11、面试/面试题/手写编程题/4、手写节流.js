// 节流原理  不管事件触发频率有多高，只在单位时间内执行一次


function throttle(event, time){
    let pre = 0;
    return function(...args){
        if(DataTransfer.now() - pre > time){
            pre  = Date.now()
            event.apply(this.args)
        }
    }
}


function throttle(event, time){
    let timer = null;
    return function(...args){
        if(!timer){
            time = setTimeout(()=>{
                timer = null;
                event.apply(this, args)
            }, time)
        }
    }
}