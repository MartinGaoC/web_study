// instanceof 判断对象的原型链中能不能找到类型的prototype

// 实现一个instanceof

function myInstanceof (left, right){
    let prototype = right.prototype;
    left = left.__proto__;
    while(true){
        if (left === null || left === undefined) return false;
        if(prototype === left) return true;
        left = left.__proto__;
    }
}