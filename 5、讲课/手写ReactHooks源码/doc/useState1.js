import React from 'react';
import ReactDOM from 'react-dom';
let hookState = [] //存放所有状态的数组，一进来就调用了两次，所以是分别赋值
let hookIndex = 0 // 索引
function useState (initialState){
  hookState[hookIndex] = hookState[hookIndex] || initialState
  let currentIndex = hookIndex  // 利用闭包的机制, 外层hook会多次渲染 但是我只改变我点击的值得
  function setState (newState){

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
