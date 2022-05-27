import React from 'react';
import ReactDOM from 'react-dom'
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
/**
 * useMemo useCallback
 * 1. 优化，有一个依赖项，如果依赖的值变化了就会更新，如果依赖项没有变化就不更新
 */

let Child = ({data, onButtonClick}) =>{
  console.log('child render')
  return(
    <button onClick={()=>onButtonClick()}>{data.number}</button>
  )
}

// Child = React.memo(Child);


function useCallback (callback, depent) {
  if(hookState[hookIndex]){ // 是否是第一次渲染？不是第一次渲染 
    let [lastCallback, lastDepent] = hookState[hookIndex]
     //判断依赖有没有变化
     let same = depent.every((item, index)=> item === lastDepent[index])
     if(same){ // 如果有任意一项满足条件 证明没有变化
      hookIndex++
      return lastCallback
     } else { // 就是有变化
      hookState[hookIndex++] = [callback, depent]
      return callback
     }
  } else { // 是第一次渲染
    hookState[hookIndex++] = [callback, depent] //hookIndex = 3
    return callback
  }
}

function useMemo (factory, depent) {
  if(hookState[hookIndex]){ // 是否是第一次渲染？不是第一次渲染 
    let [lastMemo, lastDepent] = hookState[hookIndex]
     //判断依赖有没有变化
     let same = depent.every((item, index)=> item === lastDepent[index])
     if(same){ // 如果有所有项没有满足条件 证明没有变化
      hookIndex++
      return lastMemo
     } else { // 就是有变化
      let newMemo = factory()
      hookState[hookIndex++] = [newMemo, depent]
      return newMemo
     }
  } else { // 是第一次渲染
    let newMemo = factory()
    hookState[hookIndex++] = [newMemo, depent]
    return newMemo
  }
}

let App = () =>{
  let [number, setNumber] = useState(0)
  let [name, setName] = useState('hooks')
  let data = useMemo(()=>({number}), [number])
  let addClick = useCallback(()=>setNumber(number+1), [number]) // 优化  检查属性是否变化
  return(
    <>
      <input value={name} onChange={(e)=> setName(e.target.value)}/>
      {
        React.useMemo(()=> <Child data={data} onButtonClick={addClick}/>, [number])
      }
    </>
  )
}
function render() {
  hookIndex = 0 // 每次渲染的时候需要清空下标
  ReactDOM.render(<App />, document.getElementById('root'))
}
render()
