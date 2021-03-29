
* Promise.resolve方法，将现有对象转为Promise对象。 
* Promise.reject方法，也会返回一个新的Promise实例，该实例的状态魏rejected，Promise.reject方法的参数reason


## Promise.resolve方法的参数分为四种情况
1. 参数是一个Promise实例，会原封不动的返回这个实例

2. 参数是一个thenable对象（.then，具有then方法的对象）,比如下面这个对象。
    - resolve方法会将这个方法转为Promise对象，然后立即执行thenable对象的then方法。返回的promise会执行then方法，并采用它的最终结果
```
let thenable = {
  then: function(resolve, reject){
    resolve("OK")
  }
}
```

3. 参数不是具有then方法的对象或根本不是对象
    - 返回一个新的Promise对象，状态为Resolved

4. 不带有任何参数
    - 直接返回一个Resolved状态的Promise对象