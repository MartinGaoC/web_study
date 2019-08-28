
//  发布订阅 观察者模式
class Dep {
    constructor(){
        this.subs = []; // 存放所有的watcher
    }
    // 订阅
    addSub(watcher){
        this.subs.push(watcher);
    }
    // 发布
    notify(){
        this.subs.forEach(watcher => {
            watcher.update()
        })
    }
}
class Watcher{
    constructor(vm, expr, cb){
        this.vm = vm;
        this.expr = expr;
        this.cb = cb;
        //默认存放一个老的值
        this.oldValue = this.get();
    }
    get(){
        Dep.target = this; //先把自己放在this上
        //取值  把这个观察者 和数据关联起来
        let value = CompileUtil.getVal(this.vm,this.expr);
        Dep.target = null; // 不取消 任何值取值 都会添加watchr
        return value;
    }
    update(){ // 更新操作  数据变化后 会调用观察这的update方法
        let newVal = CompileUtil.getVal(this.vm, this.expr);
        if(newVal !== this.oldValue){
            this.cb(newVal);
        }
    }
}



class Compiler{
    constructor(el, vm){
        // 判断el 属性是否是一个元素  如果不是元素 则获取它
        this.el = this.isElementNode(el) ? el : document.querySelector(el);
        // 把当前节点中的元素获取到放到内存中
        this.vm = vm;

        let fragment = this.node2fragment(this.el);
       

        // 把节点中的内容进行替换

        // 编译模版 用数据编译
        this.compile(fragment);
        // 把内容再塞回页面中
        this.el.appendChild(fragment);
    }
    isDirective(attrName){
        return attrName.startsWith('v-')
    }
    // 编译元素的
    compileElement(node){
        let attributes = node.attributes; // 类数组
        [...attributes].forEach(attr => {
           let {name,value:expr} = attr;
         // 判断是不是指令
           if(this.isDirective(name)){
                let [,directive]=name.split('-');
                // 调用不同的指令来处理
                CompileUtil[directive](node,expr,this.vm)
                console.log(name)
           }
        })

    }
    // 编译文本的
    compileText(node){  // 判断当前文本节点中内容是否包含{{}}
        let content = node.textContent;
        if(/\{\{(.+?)\}\}/.test(content)){
            CompileUtil['text'](node,content,this.vm)
            console.log(content)   // 找到所有文本
        }
    }
    compile(node){ //用来编译内存中的dom节点
        let childNodes = node.childNodes;
        [...childNodes].forEach(child => {
            if(this.isElementNode(child)){
                this.compileElement(child);
                // 如果是元素的话  需要把自己传进去 再去遍历子节点
                this.compile(child)
            } else {
                this.compileText(child);
            }
        });
        // console.log(childNodes)
    }
    // 把节点移动到内存中
    node2fragment(node){
        let fragment = document.createDocumentFragment();
        let firstChild;
        while(firstChild = node.firstChild){
            // appendChild具有移动性
            fragment.appendChild(firstChild);
        }
        return fragment
    }

    isElementNode(node){  // 是不是元素节点
        return node.nodeType === 1;
    }
}



CompileUtil = {
    // 根据表达式取到对应的数据
    getVal(vm, expr){
        return expr.split('.').reduce((data,current) => {
            return data[current]
        },vm.$data)
    },
    setVal(vm, expr, value){
        expr.split('.').reduce((data,current,index,arr) => {
            if(arr.length-1 == index){
                return data[current] = value
            }
            return data[current]
        },vm.$data)
    },
    // 解析v-model 这个指令
    model(node, expr, vm){ // node 是节点 expr 表达式  vm 实例
        // 给输入框赋予value属性
        let fn = this.updater['modelUpdater'];
        new Watcher(vm,expr,(newVal)=>{  // 给输入框加一个观察者  如果稍后数据更新了会触发此方法，会拿新值给输入框赋予值。
            fn(node,newVal);
        })
        node.addEventListener('input',(e) => {
            let value = e.target.value;  // 获取用户输入的内容
            this.setVal(vm, expr, value)
        })
        let value = this.getVal(vm,expr);
        fn(node,value)
    },
    html(){
        // 把html变成内容插入到dom里  node.innerHTMl = xxx
    },
    getContentValue(vm,expr){
        //遍历表达式  将内容重新替换成一个完整的内容 返还回去
        return expr.replace(/\{\{(.+?)\}\}/g,(...args) => {
            return this.getVal(vm, args[1]);
        })
    },
    text(node,expr,vm){  // 
        let fn = this.updater['textUpdater']; 
        let content = expr.replace(/\{\{(.+?)\}\}/g,(...args) => {
            // 给表达式中每个{{}}都加上观察者
            new Watcher(vm, args[1], (newVal)=>{
                fn(node,this.getContentValue(vm,expr)); //返回了一个全的字符串
            })
            return this.getVal(vm,args[1]);
        })
        fn(node, content)
    },
    updater:{
        // 把数据插入到节点
        modelUpdater(node, value){
            node.value = value 
        },
        htmlUpdater(){

        },
        textUpdater(node, value){
            node.textContent = value
        }
    }
}


class Observer{  // 实现数据劫持
    constructor(data){
        console.log(data)
        this.observer(data)
    }

    observer(data){
        // 验证合法性 是对象去观察
        if(data && typeof data == 'object'){
            //  如果是对象
            for(let key in data){
                this.defineReactive(data, key, data[key]);
            }
        }
    }
    defineReactive(obj, key, value){
        this.observer(value);
        let dep = new Dep();  // 给每一个属性 都加上一个具有发布订阅的功能
        Object.defineProperty(obj,key,{
            get(){
                //  创建watcher时 会取到对应的内容， 并且吧watcher放到了全局上。
                Dep.target && dep.addSub(Dep.target);
                return value;
            },
            set:(newVal) => {
                if(newVal != value){
                    this.observer(newVal)
                    value = newVal;
                    dep.notify();
                }
            }

        })
    }
}

//基础类
class Vue{
    constructor(options){
        this.$el = options.el;
        this.$data = options.data;
        let computed = options.computed
        // 这个根元素存在  编译模版
        if(this.$el){

            


            // 把数据 全部转化成用Object.defineProperty来定义
            new Observer(this.$data)


            for(let key in computed){ // 
                Object.defineProperty(this.$data, key,{
                    get:() => {
                        return computed[key].call(this);
                    }
                })
            }
            // 把数据获取操作 vm上的取值操作都代理到vm.$data
            this.proxyVm(this.$data);

            new Compiler(this.$el, this);
        }
    }
    proxyVm(data){
        for(let key in data){
            Object.defineProperty(this,key,{  // 实现可以通过vm取到对应的内容
                get(){
                    return data[key]  //进行转化操作
                }
            })
        }
    }
}