function isType (type) {
     return function (context) {
         return Object.prototype.toString.call(context) == `[object ${type}]`
     }
}
let types = ['String','Number','Null','Boolean','Undefined'];
let utils = {
}
for(let i = 0; i < types.length; i++){
    let type = types[i]
    utils['is' + type] = isType(type);
}
let flag = utils.isString('hello');
console.log(flag)