// unSubscribe

const UPDATA_TITLE_COLOR = 'UPDATA_TITLE_COLOR'
const UPDATA_TITLE_TEXT = 'UPDATA_TITLE_TEXT'
const UPDATA_CONTENT_COLOR = 'UPDATA_CONTENT_COLOR'
const UPDATA_CONTENT_TEXT = 'UPDATA_CONTENT_TEXT'

let initState =  {
  title:{ color:'red', text:'标题'},
  content:{ color:'blue', text:'内容'}
} 
// 处理器
function reducer (state=initState, action) {
  switch (action.type){
    case UPDATA_TITLE_COLOR:
      return {...state, title:{...state.title,color:action.payload}};
    case UPDATA_TITLE_TEXT:
      return {...state, title:{...state.title,text:action.payload}};
    case UPDATA_CONTENT_COLOR:
      return {...state, content:{...state.content,color:action.payload}};
    case UPDATA_CONTENT_TEXT:
      return {...state, content:{...state.content,text:action.payload}};
    default:
      return state
  }
}
function createStore(reducer) {
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
      listeners = listeners.filter(item=>item!=listener); // 把自己剔除
    }
  }
  dispatch({type:'@@REDUX?INIT'})
  return {
    getState,
    dispatch,
    subscribe
  }
}

let store = createStore(reducer)



function renderTitle(state){
  let Elements = document.getElementById('Title');
  Elements.style.color = state.color;
  Elements.innerHTML = state.text;
}

function renderContent(state){
  let Elements = document.getElementById('Content');
  Elements.style.color = state.color;
  Elements.innerHTML = state.text;

}

function renderApp () {
  renderTitle(store.getState().title)
  renderContent(store.getState().content)
}
renderApp();
let unSubscribe = store.subscribe(renderApp);

setTimeout(()=>{
  store.dispatch({type:UPDATA_TITLE_COLOR,payload:'black'});
  unSubscribe();
  store.dispatch({type:UPDATA_CONTENT_TEXT,payload:'新内容'});
},2000)

//为了解决状态被任意改变的问题  引入了管理员的概念  现在规定不能直接操作appState 要想改状态必须通过 dispatch