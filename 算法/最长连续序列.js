 // 请在此作答，并将最终结果通过console.log()打印
 if (arr === null || arr.length === 0) return
 let set = new Set()
 for(let i = 0; i < arr.length; i++){
   set.add(arr[i])
 }
 let logsArr = [] // 记录所有的连续值
 let current = 1 // 连续值
 let currentValue 
 for(let j = 0; j < arr.length; j++){
   currentValue = arr[j]
   if(!(set.has(currentValue - 1))){ // 外层先把不符合的过滤掉 连续值为1
     current = 1
     while(set.has(currentValue + 1)){  // 有连续值的计数
       current+=1
       currentValue = currentValue + 1
     }
     logsArr.push(current)
   }
 }
 console.log(Math.max(...logsArr),'logsArr')



 var len = nums.length;

 for(var i = 0;i < len;i++) {
     if (nums[i] === target) {   //数组中有目标数
         return i;
     } else if (nums[i] > target) {  //目标数应插入数组中
         var temp = target;
         for(var j = i-1; j < len; j++) {
             var tempp = nums[j];
             nums[j] = temp;
             temp = nums[j];
             nums[j+1] = tempp;
         }
         return i;
     } 
 }

 //目标数比数组中的数都大

 var result = arr.findIndex((item) => {
  return item >= num;
});
console.log(result === -1 ? arr.length : result)


for(let i = 0; i < arr.length; i++){
  // console.log(parseInt(arr[i]),parseInt(num))
  if (parseInt(arr[i]) == parseInt(num)) {
      console.log(i)
      return
  } else if (arr[i] > num) {
      let temp = num;
      for (let j = i - 1; j < len; j++) {
          let tempp = arr[j];
          arr[j] = temp;
          temp = arr[j];
          arr[j + 1] = tempp;
      }
      console.log(i);
  } 
}
// for (let i = 0; i < arr.length, i++;) {
//     console.log(parseInt(arr[i]),parseInt(num))
  // if (parseInt(arr[i]) == parseInt(num)) {
  //     console.log(i)
  //     return
  // } else if (arr[i] > num) {
  //     let temp = num;
  //     for (let j = i - 1; j < len; j++) {
  //         let tempp = arr[j];
  //         arr[j] = temp;
  //         temp = arr[j];
  //         arr[j + 1] = tempp;
  //     }
  //     console.log(i);
  // }
// }