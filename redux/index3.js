// reducer是什么？

function renderApp (appState) {
  renderTitle(appState.title)
  renderContent(appState.content)
}

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

function reducer (state, action) {
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
  let state = {
    title:{ color:'red', text:'标题'},
    content:{ color:'blue', text:'内容'}
  } 

  function getState(){
    return state
  }

  function dispatch (action) {
    state = reducer(state, action)
  }
  return {
    getState,
    dispatch
  }
}

let store = createStore(reducer)
const UPDATA_TITLE_COLOR = 'UPDATA_TITLE_COLOR'
const UPDATA_TITLE_TEXT = 'UPDATA_TITLE_TEXT'
const UPDATA_CONTENT_COLOR = 'UPDATA_CONTENT_COLOR'
const UPDATA_CONTENT_TEXT = 'UPDATA_CONTENT_TEXT'


renderApp(store.getState())

setTimeout(()=>{
  store.dispatch({type:UPDATA_TITLE_COLOR,payload:'black'}),
  store.dispatch({type:UPDATA_CONTENT_TEXT,payload:'新内容'})
  renderApp(store.getState())
},2000)

