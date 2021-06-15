## 1. React hooks？

* 允许我们不编写类组件的情况下使用state

## 2.搭建项目

* npx create-react-app my_hooks
* cd my_hooks
* yarn start


## 3.useState
* useState 会返回一对值：当前状态  一个让你更新它的函数
* useState 唯一的参数就是初始的值


## 4.使用

```
import React from 'react';
import ReactDOM from 'react-dom';
function Counter (){
  let [number, setNumber] = React.useState(0)
  return (
    <div>
      <p>{number}</p>
      <button onClick={()=> setNumber(number+1)}>+</button>

    </div>
  )
}

ReactDOM.render(
    <Counter />,
    document.getElementById('root')
);

```
## 5.实现
```
import React from 'react';
import ReactDOM from 'react-dom';
let hookState = [] //存放所有状态的数组，一进来就调用了两次，所以是分别赋值
let hookIndex = 0 // 索引
function useState (initialState){
  hookState[hookIndex] = hookState[hookIndex] || initialState
  console.log(hookState, 'hookState')
  let currentIndex = hookIndex  // 利用闭包的机制, 外层hook会多次渲染 但是我只改变我点击的值得
  function setState (newState){
    console.log(currentIndex, 'currentIndex')

    hookState[currentIndex] = newState
    render()
  }
  return [hookState[hookIndex++], setState]
}

function Counter (){
  let [number0, setNumber0] = useState(0)
  let [number1, setNumber1] = useState(0)

  return (
    <div>
      <p>{number0}</p>
      <button onClick={()=> setNumber0(number0+1)}>+</button>
      <button onClick={()=> setNumber0(number0-1)}>-</button>
      <p>{number1}</p>
      <button onClick={()=> setNumber1(number1+1)}>+</button>
      <button onClick={()=> setNumber1(number1-1)}>-</button>
    </div>
  )
}
function render (){
  hookIndex = 0 // 每次调用都要重置 否则 就会无限增加
  ReactDOM.render(
    <Counter />,
    document.getElementById('root')
  );
}
render()


```
* 把上一次的值存起来，每次渲染的时候可以拿到上一次的值
* 利用闭包的原理存值
* 第一次渲染的时候 是往hookState里放东西，改变状态重置为0，不会往后走




## 1.useMemo useCallback

* useMemo 两个参数 第一个参数对象工厂， 第二个值是一个数组，依赖的变量
* useCallback 两个参数 第一个参数是个函数， 第二个值是一个数组，依赖的变量


* 可以减少组件渲染的次数 提高性能。
* 为了减少组件渲染，需要做优化，设置组件的属性如果变了就重新渲染，如果没变 就不渲染
* React.memo 浅比较，每次渲染都会生产一个新的对象
* 依赖的变量发生改变的话才使用新的函数 否则只使用上次的函数


## 2. React.memo




## 优点

* 没有this的问题
* 自定义hook 方便复用状态逻辑
