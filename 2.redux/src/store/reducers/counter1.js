
import * as types from '../action-types'
//这个reducer只关心Counter1的状态和action
export default function reducer (state={number:0},action){
    switch(action.type) {
        case types.INCREMENT1:
            return {number:state.number+action.payload}
        case types.DECREMENT1:
            return {number:state.number-action.payload}
        default:
            return state
    }
}