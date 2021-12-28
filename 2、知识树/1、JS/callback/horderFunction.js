function say (who){
    console.log(who + 'hello')
}

Function.prototype.before = function (beforeFunc) {
    return (...agus) => {
        beforeFunc();
        this(...agus);
    }
}


let beforeSay = say.before(()=>{
    console.log('开始说话')
})
beforeSay('我');