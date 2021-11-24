const arr = ['橘子','苹果']
let [a,b] = arr
console.log(a)
console.log(b)


const arr1 = {
    params1: '橘子',
    params2: '苹果'
}

let {params1,params2} = arr1
console.log(params1)
console.log(params2)



// 箭头函数不能使用arguments

let fn = (a,b,c) =>{
    console.log(arguments)
}
fn(1,2,3)