function fn(s){
  let n = s.length;
  let result = ''
  for(let i = 0;i<n;i++){
      for(let j=i+1;j<=n;j++){
          let str = s.slice(i,j);
          let f = str.split('').reverse().join('');
          
          if(str == f){
              result = str.length > result.length ? str : result;
          }
      }
  }
  console.log(result);
  
  return result;
}


// slice


fn('ababab')



