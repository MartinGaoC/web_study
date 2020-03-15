const UPDATE_TITLE_COLOR = 'UPDATE_TITLE_COLOR'
const UPDATE_TITLE_TEXT = 'UPDATE_TITLE_TEXT'
const UPDATE_CONTENT_COLOR = 'UPDATE_CONTENT_COLOR'
const UPDATE_CONTENT_TEXT = 'UPDATE_CONTENT_TEXT'







function createStore(reducer){
    let state;
    let listeners= []
    function getState(){
        return state;
    }
    function dispatch(action){
        state = reducer(state,action);
        listeners.forEach(i=>i());
    }
    function subscribe(listener){
        listeners.push(listener);  // 添加监听
        return function(){   //过滤
            listeners =  listeners.filter((item)=>item!=listener);
        }
    }
    dispatch({type:'@@REDUX/INIT'})
    return {
        getState,
        dispatch,
        subscribe
    }
}
let initialState = {
    title:{
        color:'red',
        text:'颜色'
    },
    content:{
        color:'green',
        text:'内容',
    }
}
function reducer(state=initialState,action){
    switch(action.type){
        case UPDATE_TITLE_COLOR:
            return {
                ...state,
                title:{...state.title,color:action.payload}
            };
        break;
        case UPDATE_TITLE_TEXT:
            return {
                ...state,
                title:{...state.title,text:action.payload}
            };
        break; 
        case UPDATE_CONTENT_COLOR:
            return {
                ...state,
                content:{...state.content,color:action.payload}
            }
        break;
        case UPDATE_CONTENT_TEXT:
            return {
                ...state,
                content:{...state.content,text:action.payload}
            }
        break;
        default:
            return state
        break;

    }
}
let store = createStore(reducer)

function renderTitle(state){
    let element = document.getElementById('title');
    element.style.color = state.color;
    element.innerHTML = state.text;
}
function renderContent(state){
    let element = document.getElementById('content');
    element.style.color = state.color;
    element.innerHTML = state.text;
}
function render(){
    renderTitle(store.getState().title);
    renderContent(store.getState().content);
}
render()
let unSubscribe = store.subscribe(render);
 
setTimeout(()=>{
    store.dispatch({type:UPDATE_TITLE_COLOR,payload:'black'});
    store.dispatch({type:UPDATE_CONTENT_TEXT,payload:'新内容'});
},2000)