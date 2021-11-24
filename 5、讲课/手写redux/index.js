// 渲染模型

let appState = {
  title:{ color:'red', text:'标题'},
  content:{ color:'blue', text:'内容'}
}

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

renderApp(appState)