class Transaction {
    perform(anyMethod,wrapper){
        wrapper.forEach(wrap=> {wrap.initialize();})
        anyMethod();
        wrapper.forEach(wrap=> {wrap.close();})
    }
}

let  transaction = new Transaction();

let oldFunc = () => {
    console.log('原有的逻辑')
}

transaction.perform(oldFunc, [{
    initialize(){
        console.log('初始化')
    },
    close(){
        console.log('关闭')
    }
},
{
    initialize(){
        console.log('初始化1')
    },
    close(){
        console.log('关闭1')
    }
}])