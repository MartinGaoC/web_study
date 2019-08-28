function defineReactive(data, key, val){
    observe(val) // 递归遍历所有子属性
    var dep = new Dep();
    Object.defineProperty(data, key, {
        enumerable: true,
        configurable: true,
        get: function () {
            if(Dep.target){
                dep.addSub(watcher); // 添加一个订阅者
            }
            return val
        },
        set: function(newVal){
            val = newVal;
            console.log(`属性${key}已经被监听了，现在值为：${newVal.toString()}`)
            dep.ontify(); // 如果数据变化 通知所有订阅者
        }
    })
}

function observe(data){
    if(!data || typeof data !== 'object'){
        return;
    };
    Object.keys(data).forEach(function(key) {
        defineReactive(data, key, data[key]);
    });
}

function Dep(){
    this.subs = [];
}
Dep.prototype = {
    addSub: function(sub){
        this.subs.push(sub);
    },
    notify: function() {
        this.subs.forEach(function(sub){
            sub.update();
        })
    }
}

function Watcher(vm, exp, cb){
    this.cb = cb;
    this.vm = vm;
    this.exp = exp;
    this.value = this.get();
}
Watcher.prototype = {
    update: function (){
        this.run();
    },
    run: function(){
        var value = this.vm.data[this.exp];
        var oldVal = this.value;
        if(value !== oldVal){
            this.value = value;
            this.cb.call(this.vm, value, oldVal);
        }
    },
    get: function (){
        Dep.target = this; // 缓存自己
        var value = this.vm.data[this.exp];   // 强制执行监听器里的函数
        Dep.target = null; // 释放自己
        return value;
    }
}
var library = {
    book1: {
        name: ''
    },
    book2: ''
}
observe(library);
library.book1.name = 'vue权威指南';
library.book2 = '没有此书籍';
