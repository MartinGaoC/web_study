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
 * 为了减少组件渲染，如果属性变了 重新渲染 如果没变则不渲染
 * useMemo useCallback
 */



let Child = ({data, addClick}) =>{
  console.log('child render')
  return(
    <button onClick={()=>addClick()}>{data.num}</button>
  )
}

function memo (OldFunctionComponent) {
  // PureComponent 以浅层对比Props和State的方式实现了shouldComponentUpdate
  return class extends React.PureComponent {
      render(){ 
        return <OldFunctionComponent {...this.props}/>
      }
    }
  
}

Child = memo(Child)


function useCallback (callback, dependencies)  {
  if (hookState[hookIndex]){  // 说明不是第一次渲染
    let [lastCallback, lastDependencies] = hookState[hookIndex];
    let seam = dependencies.every((item, index)=> item === lastDependencies[index])
    if(seam) { // 没有变量不一样
      hookIndex++
      return lastCallback
    } else {
      hookState[hookIndex++] = [callback, dependencies]
      return callback
    }
  } else {// 说明是第一次渲染
    hookState[hookIndex++] = [callback, dependencies]
    return callback
  }
}

function useMemo (factory, dependencies)  {
  if (hookState[hookIndex]){  // 说明不是第一次渲染
    let [lastMemo, lastDependencies] = hookState[hookIndex];
    let seam = dependencies.every((item, index)=> item === lastDependencies[index])
    if(seam) { // 没有变量不一样
      hookIndex++
      return lastMemo
    } else {
      let newMemo = factory()
      hookState[hookIndex++] = [newMemo, dependencies]
      return newMemo
    }
  } else {// 说明是第一次渲染
    let newMemo = factory()
    hookState[hookIndex++] = [newMemo, dependencies]
    return newMemo
  }
}

let App = () => {
   let [num, setNum] = useState(0)
   let [name, setName] = useState(0)
   // 每次渲染都要重新创建一个对象 1参数是生成对象的工厂， 2参数是依赖的变量，是否变化
   let data = useMemo(()=>({num}), [num])
   let addClick = useCallback(() => setNum(num+1), [num])
   return (
     <>

      <input value={name} onChange={(e)=> setName(e.target.value)}/>
      <Child  data={data} addClick={addClick}/>
     </>
   )
}


function render (){
  hookIndex = 0
  ReactDOM.render(<App />, document.getElementById('root'));

}

render()
