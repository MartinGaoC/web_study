// 一定时间内没有触发 就顺序执行， 如果接连触发 就会重新计时

function debounce (fn, wait){
    let timeout = null
    return function (){
        if(timeout !== null){
            clearTimeout(timeout)
        }
        timeout = setTimeout(fn, wait)
    }
}