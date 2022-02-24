let a = 12;
let b = a ;
b = 13;
console.log(a)  // 12
// 变量开辟的存储空间 在栈里

let obj1 = {n:100};
let obj2 = obj1;
obj2['n'] = 200;

// 对象开辟的存储空间 在堆了 赋值以后共享
console.log(obj1.n); //200


var obj = {
    n: 10,
    m: obj.n * 10  // TypeError: Cannot read property 'n' of undefined
}
console.log(obj.m)


var ary1 = [3,4];
var ary2 = ary1;
ary2[0] = 1;
ary2 = [4,5];
ary2[1] = 2;
ary1[1] = 0;
console.log(ary1,ary2)  //  [1,0],[4,2]


