// createStore 是什么？  getstate构建

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


function createStore(reducer) {
  let state = {
    title:{ color:'red', text:'标题'},
    content:{ color:'blue', text:'内容'}
  } 

  function getState(){  // 取状态的
    return state
  }

  function dispatch (action) {  //  改状态的
    switch (action.type){
      case UPDATA_TITLE_COLOR:
        state.title.color  = action.payload;
        break;
      case UPDATA_TITLE_TEXT:
        state.title.text  = action.payload;
        break;
      case UPDATA_CONTENT_COLOR:
        state.content.color  = action.payload;
        break;
      case UPDATA_CONTENT_TEXT:
        state.content.text  = action.payload;
        break;
      default:
        break
    }
    
  }
  return {
    getState,
    dispatch
  }
}

let store = createStore()
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

//为了解决状态被任意改变的问题  引入了管理员的概念  现在规定不能直接操作appState 要想改状态必须通过 dispatch