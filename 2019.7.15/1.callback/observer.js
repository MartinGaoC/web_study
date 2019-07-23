// 观察者模式 基于发布订阅模式
//  发布 订阅 两者没有直接关系

// 观察者模式  被观察的 观察者 vue
//  把 观察者  放到被观察者中
//  被观察者  主动 通知 观察者


class Subject {  // 被观察者
    constructor(name){
        this.stack = []
        this.state = '开心'
        this.name = name
    }
    attach(observer){
        this.stack.push(observer)
    }
    setState(newState){
        this.state = newState
        this.stack.forEach(callback => {callback.upDate(newState,this.name)})
    }
}

class Observer {  // 观察者
    constructor(name){
        this.name = name 
    }
    upDate(newState,childName){
        console.log(this.name+childName+newState)
    }
}


let o1 = new Observer('爸爸')
let o2 = new Observer('妈妈')

let childObject = new Subject('宝宝')

childObject.attach(o1)
childObject.attach(o2)

childObject.setState('不开心')