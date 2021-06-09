import React from 'react';
import ReactDOM from 'react-dom';



let hookState = [] // 存放所有状态
let hookIndex = 0 // 索引
function useState (initialState) {
  hookState[hookIndex] = hookState[hookIndex] || initialState
  let currentIndex = hookIndex
  function setState (newState) {
    hookState[currentIndex] = newState
    render()
  }
  return [hookState[hookIndex++], setState]
}

function Counter () {
  let [number1, setNumber1] = useState(0);
  let [number2, setNumber2] = useState(0);

  return(
    <div>
      <p>{number1}</p>
      <button onClick={()=> setNumber1(number1+1)}>+</button>
      <button onClick={()=> setNumber1(number1-1)}>-</button>
      <p>{number2}</p>
      <button onClick={()=> setNumber2(number2+1)}>+</button>
      <button onClick={()=> setNumber2(number2-1)}>-</button>
    </div>
  )
}

function render () {
  hookIndex = 0
  ReactDOM.render(<Counter/>, document.getElementById("root"))
}
render()