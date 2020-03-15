import React, { Component } from 'react';
import store from '../store'
import * as types from '../store/action-types'
import {bindActionCreators} from '../redux'

function increment (payload){
    return {type:types.INCREMENT1,payload}
}
function decrement (payload){
    return {type:types.DECREMENT1,payload}
}

// let increments = bindActionCreators(increment, store.dispatch);
// let decrements = bindActionCreators(decrement, store.dispatch);


let actions = bindActionCreators({increment,decrement}, store.dispatch);
export default class Counter1 extends Component {
    state={
        number:store.getState().counter1.number
    }
    componentDidMount(){
        this.unsubscribe =  store.subscribe(()=>{
            this.setState({
                number:store.getState().counter1.number
            })
        })
    }
    componentWillUnmount(){
        this.unsubscribe()
    }
    render(){
        return(
            <>
                <p>{this.state.number}</p>
                <button onClick={()=>actions.increment(2)}>+</button>
                <button onClick={()=>actions.decrement(3)}>-</button>
            </>
        )
    }
}