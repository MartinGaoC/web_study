export default function createStore(reducer) {
  let state
  let listeners = []
  function getState(){
    return state
  }

  function dispatch (action) {
    state = reducer(state, action)
    listeners.forEach(l=>l())
  }
  
  function subscribe (listener) {
    listeners.push(listener);
    return function (){
      listeners = listeners.filter(item=>item!==listener); // 把自己剔除
    }
  }
  dispatch({type:'@@REDUX?INIT'})
  return {
    getState,
    dispatch,
    subscribe
  }
}