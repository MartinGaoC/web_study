
let UPDATE_TITLE_COLOR = 'UPDATE_TITLE_COLOR'
let UPDATE_TITLE_TEXT = 'UPDATE_TITLE_TEXT'
let UPDATE_CONTENT_COLOR = 'UPDATE_CONTENT_COLOR'
let UPDATE_CONTENT_TEXT= 'UPDATE_CONTENT_TEXT'

// 处理器， 接收老状态和action 返回新状态
let initialState = {
    title:{color:'red',text:'标题'},
    content:{color:'green',text:'内容'}
}
function reducer(state=initialState,action){
    switch(action.type){   // 判断动作的类型
        case UPDATE_TITLE_COLOR:
            return {...state,title:{...state.title,color:action.payload}};
        break;
        case UPDATE_TITLE_TEXT:
            return {...state,title:{...state.title,text:action.payload}};
        break;
        case UPDATE_CONTENT_COLOR:
            return {...state,content:{...state.content,color:action.payload}};
        break;
        case UPDATE_CONTENT_TEXT:
            return {...state,content:{...state.content,text:action.payload}};
        break;
        default:
            return state;
        break;
    }
}

// 创建仓库
function createStore(reducer){
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
            listeners = listeners.filter(item=>item!=listener)  // 这是过滤  把自己这个监听函数从数组中删除
        }
    }
    dispatch({type:'@@REDUX/INIT'})
    return {
        getState,  // 获取
        dispatch,   // 派发
        subscribe   //  订阅
    }
    
}
let store = createStore(reducer);
// 为了解决状态可以被任意改变的问题 我们引入管理员的概念  现在规定不能直接操作appState， 要想改状态只能通过派发动作的方式来改
// 全局作用域和函数作用域  react中


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
function renderApp(){
    renderTitle(store.getState().title);
    renderContent(store.getState().content);
}
renderApp();
let unSubscribe = store.subscribe(renderApp);

setTimeout(() =>{
    store.dispatch({type:UPDATE_TITLE_COLOR,payload:'yellow'});
    unSubscribe();
    store.dispatch({type:UPDATE_CONTENT_TEXT,payload:'滚蛋'});
  
},2000)