let arr = ['a','n','c']
arr.forEach(item => console.log(item))


function logArrayElements(element,index,arr){
    console.log(`a[${index}]=${element}`)
}
[2,5, ,9].forEach(logArrayElements);