 # 方法一 function indexOf(arr, item) { if(Array.prototype.indexOf){
* 判断浏览器是否支持indexOf方法 、
```
return arr.indexOf(item); }else{ for(var i=0;i<arr.length;i++){ if(arr[i]===item){ return i; } } } return -1; } 

```

* 方法二 function indexOf(arr, item) { if(Array.prototype.indexOf){
    
*  判断浏览器是否支持indexOf方法 return arr.indexOf(item); } else if (arr.indexOf(item) > 0) { return arr.indexOf(item) }else{ return -1 } }