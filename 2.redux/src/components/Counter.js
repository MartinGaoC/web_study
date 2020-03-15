import React, { Component } from 'react';
import store from '../store'
import * as types from '../store/action-types'
import { bindActionCreators } from '../redux'

function increment (payload) {
    return {type: types.INCREMENT, payload}
}

function decrement (payload) {
    return {type: types.DECREMENT, payload}
}

// let add = bindActionCreators(increment, store.dispatch)
// let minus = bindActionCreators(decrement, store.dispatch)

let actions = bindActionCreators({increment, decrement}, store.dispatch)

export default class Counter extends Component {
    state ={
        number: store.getState().counter.number
    }
    componentDidMount(){
        this.unsubscribe = store.subscribe(()=>{
            this.setState({
                number: store.getState().counter.number
            })
        })
    }
    componentWillUnmount(){
        this.unsubscribe()
    }
    render() {
        return(
            <>
                <p>{this.state.number}</p>
                <button onClick={()=>actions.increment(3)}>+</button>
                <button onClick={()=>actions.decrement(1)}>-</button>
            </>
        )
    }
}