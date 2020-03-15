import * as types from '../action-types'

export default function counter1 (state={number: 0}, action){
    switch(action.type){
        case types.INCREMENT1:
            return {number: state.number+ action.payload};
        case types.DECREMENT1:
            return {number: state.number- action.payload}
        default:
            return state
    }
}