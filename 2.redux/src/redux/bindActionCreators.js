// 此方法只能接收一个actionCreator actionCreator是一个函数

function bindActionCreator(actionCreator,dispatch){
    return function(...args){
        dispatch(actionCreator(...args));
    }
}
export default function(actionCreators,dispatch){
    if(typeof actionCreators == 'function'){
        return bindActionCreator(actionCreators,dispatch)
    }
    const boundActionCreators = {}; // bound是bind的过去式或者完成式
    for(const key in actionCreators){
        boundActionCreators[key] = bindActionCreator(actionCreators[key],dispatch);
    }
    return boundActionCreators;
}