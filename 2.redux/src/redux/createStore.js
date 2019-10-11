export default function createStore(reducer){
    let state;
    let listeners = [];
    function getState(){
        return state;
    }
    // action是有格式要求，第一个必须是一个纯对象 new Object {}  第二必须有一个type属性
    function dispatch(action){
        state = reducer(state,action);
        listeners.forEach(l=>l());
    }
    function subscribe(listener){
        listeners.push(listener) // 这是把自己这个监听函数添加到数组中
        return function(){
            listeners = listeners.filter(item=>item!==listener)  // 这是过滤  把自己这个监听函数从数组中删除
        }
    }
    dispatch({type:'@@REDUX/INIT'})
    return {
        getState,  // 获取
        dispatch,   // 派发
        subscribe   //  订阅
    }
    
}