let arr = ['w','helllo','world']
console.log(arr.map((item => item.split(""))))
console.log(arr.flatMap(item => item.split("")))