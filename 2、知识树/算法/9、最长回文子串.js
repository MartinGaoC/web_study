function fn(s){
  let n = s.length;
  let result = ''
  for(let i = 0;i<n;i++){
      for(let j=i+1;j<=n;j++){
          // 双指针 ，一个从0开始 一个从0+1开始
          let str = s.slice(i,j); // 使用裁剪字符串的功能
          let f = str.split('').reverse().join(''); // 颠倒字符串并返回
        //   console.log(str, 'str')
        //   console.log(result, 'result');

        //   console.log(f, 'f')
          if(str == f){ // 判断 如果颠倒后的字符串=颠倒前 给result赋值， 如果
              result = str.length > result.length ? str : result; // 如果新的str的长度大于旧的，那么就返回新的
          }
      }
  }
  console.log(result, 'result');
  
  return result;
}


// slice


// function fn(str){
//     let n = str.length;
//     let result="";
//     for(let i = 0; i < n; i++){
//         for(let j = i+1; j <= n; j++){
//             let sliceStr = str.slice(i, j);
//             let reducerStr = sliceStr.split().reverse().join()
//             if(sliceStr == reducerStr){
//                 result = sliceStr.length > result.length ? sliceStr : result
//             }
//         }
//     }
//     console.log(result)
//     return result
// }
fn('babad')



