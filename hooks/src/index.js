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


/**
 *  useMemo  useCallBack  作用 如果依赖值不变 那么就不去渲染
 * 
 */

let Child = ({data, addClick}) =>{
  console.log('child render')
  return(
    <button onClick={()=>addClick()}>{data.num}</button>
  )
}

function memo (OldFunctionComponent) {
  // 通过浅比较state和props 实现了 shouldComponentUpdate
  return class extends React.PureComponent{
    render(){
      return <OldFunctionComponent {...this.props}/>
    }
  }
}

Child = memo(Child);



let useMemo = (factory, dependencies) =>{
  if(hookState[hookIndex]){ // 说明不是第一次渲染
    let [lastMemo, lastDependencies] = hookState[hookIndex]
    let same = lastDependencies.every((item, index) => item === dependencies[index])
    if(same){ // 没有变化
      hookIndex++
      return lastMemo
    } else {
      let newMemo = factory()
      hookState[hookIndex++] = [newMemo, dependencies]
      return newMemo
    }
  } else { // 第一次渲染
    let newMemo = factory()
    hookState[hookIndex++] = [newMemo, dependencies]
    return newMemo
  }
}


let useCallback = (callback, dependencies) =>{
  if(hookState[hookIndex]){ // 说明不是第一次渲染
    let [lastCallback, lastDependencies] = hookState[hookIndex]
    let same = lastDependencies.every((item, index) => item === dependencies[index])
    if(same){ // 没有变化
      hookIndex++
      return lastCallback
    } else {
      hookState[hookIndex++] = [callback, dependencies]
      return callback
    }
  } else { // 第一次渲染
    hookState[hookIndex++] = [callback, dependencies]
    return callback
  }
}
let App = () =>{
  let [num, setNum] = useState(0)
  let [name, setName] = useState(0)


  let data = useMemo(()=>({ num }), [num])

  let addClick = useCallback(() => {
    setNum(num+1)
  }, [num])
  return(
    <div>
      <input value={name} onChange={(e)=>setName(e.target.value)}/>
      <Child data={data} addClick={addClick}/>
    </div>
   
  )
}

function render (){
  hookIndex = 0 // 每次调用都要重置 否则 就会无限增加
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
}
render()
