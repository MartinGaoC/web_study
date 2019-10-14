import counter1 from './counter1';
import counter2 from './counter2';
import {combineReducers} from'../../redux'
// import {combineReducers} from 'redux';
// 把两个reducer合并成了一个reducer
// 合并以后状态树会有变化，key 是合并的状态树的属性名，值就是那个reducer

let reducer = combineReducers({
    counter1,
    counter2
})

export default reducer;