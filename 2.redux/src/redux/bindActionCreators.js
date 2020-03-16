
function bindActionCreator (actionCreator, dispatch) {
  return function(){
    dispatch(actionCreator());
  } 
}

export default function (actionCreator, dispatch){
  if(typeof actionCreator === 'function'){
    return bindActionCreator(actionCreator, dispatch)
  }
  const boundActionCreators = {}; // bound是bind的过去式，完成
  for(const key in actionCreator){
    boundActionCreators[key] =  bindActionCreator(actionCreator[key],dispatch);
  }
  return boundActionCreators
}