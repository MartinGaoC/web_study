// 手机类
// ES5实现
function Shouji (brand, price){
    this.brand = brand;
    this.price = price;
}

Shouji.prototype.call = function(){
    console.log('打电话')
}

let shouji = new Shouji('华为', '5999')
phone.call()
console.log(shouji)


// es6 class实现

class Phone {
    constructor (brand, price) {
        this.brand = brand;
        this.price = price;
    }
    call(){
        console.log('打电话')
    }
}

let phone = new Phone('iphone', '8000')
console.log(phone)
phone.call()


// 静态成员