function createStore (reducer) {
  let state= {}
  let listeners = []
  function getState () {  // 获取状态
    return this.state
  }

  function dispatch(action){  //  发布动作 执行所有订阅事件
    state = reducer(state, action)
    listeners.forEach(v=>v())
  }

  function subscribe(listener){  // 订阅事件
    listeners.push(listener)
  }

  dispatch({type:'@@REDUX?INIT'})
  return {
    getState,
    dispatch,
    subscribe
  }
}