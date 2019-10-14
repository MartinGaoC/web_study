export default function combineReducers(reducers){
    //  从老状态和action中得到新的状态
    return function(state={},action){
        let nextState = {};
        for(let key in reducers){
            nextState[key] = reducers[key](state[key],action);
        }
        return nextState;
    }
}