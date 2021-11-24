
let result = ar.filter((item) => item % 2 === 0)
console.log(result)


let ar = [{
 name: '1'
},{},{
    name: '1'
}]


let defaultAr = []

ar.map((item, index)=>{
    if(JSON.stringify(item) === '{}'){
        ar[index] = defaultAr[index]
    }
})