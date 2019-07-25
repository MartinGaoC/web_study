let a = {
    n:1
}

let b = a;

a.x = a = {
    n:2
}
console.log(a);
console.log(a.x);
console.log(b);
console.log(b.x);


let a = {
    n:1
}

let b = a;
a.x = b


console.log(a.x)
console.log(b)
console.log(a)




var a = 'abc' + 123 + 456;
var b = '456' - '123';
var c = 100 + true + 21.2 + null;
console.log(a,b,c);



var str = 'abc123';
var num = parseInt(str);
if (num == NaN) {
    console.log(NaN);   //  NaN不等于任何数  也不等于  NaN
} else if (num == 123) {
    console.log(123);
} else if (typeof num == 'number') {
    console.log('number',num);  // NaN属于number
} else {
    console.log('str');
}




var a = 0;
var b = a;
b++;
console.log(a)  // 0   运行机制的题目  不用说了
var o = {};
o.a = 0;
var b = o;
b.a = 10;
console.log(o.a) // 10


// alert(1)          
console.log(parseInt(1.3))              
console.log(1)  
console.log(isNaN(1))   
console.log(parseInt("1"))



console.log(alert(1))                
console.log(typeof undefined)
console.log(parseInt(undefined))      
console.log(isNaN(undefined))


console.log(isNaN(null))
console.log(isNaN(parseInt(null)))
console.log(Number(null))
console.log(parseFloat(null))

console.log(parseInt("")) // NaN
console.log(Number(""))   // 0
console.log(isNaN(""))    // false

console.log(parseInt(null))// NaN
console.log(Number(null))  // 0
console.log(isNaN(null))   // false

console.log(parseInt("12px")) // 12
console.log(Number("12px"))   // NaN
console.log(isNaN("12px"))    // true


if (isNaN(NaN) == "") {
    console.log("珠峰")
} else {
    console.log("培训")
}


let x = [1, 2, 3];
let y = x;
let z = [4, 5, 6];
y[0] = 10;
y = z;
z[1] = 20;
x[2] = z = 30;
console.log(x, y, z); // [10,2,30],[4,20,6],30