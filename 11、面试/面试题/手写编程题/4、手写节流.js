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


let a = [1,2,3,[4,[5]]]
console.log(a.flat(Infinity))

const person = {
    name: '一碗周',
    age: '18',
  }
  const e = Object.entries(person)
  console.log(e) // { name: '一碗周', age: '18' }

  const p = Object.fromEntries(e)
  console.log(p) // { name: '一碗周', age: '18' }
  
  