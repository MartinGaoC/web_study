let school = { name : "訾博", age : 24, sex : "男" }

const map = new Map(Object.entries(school))

 console.log(Object.keys(school)); 
 console.log(Object.values(school));
 console.log(Object.entries(school));
 console.log(typeof map)
 console.log(Object.getOwnPropertyDescriptors(school))