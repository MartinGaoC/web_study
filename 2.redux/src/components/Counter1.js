import React, { Component } from 'react';
import store from '../store';
import * as types from '../store/action-type';
import { bindActionCreators } from 'redux';
function increment(){
  return {type:types.INCREMENT}
}
function decrement(){
  return {type:types.DECREMENT}
}
let action = bindActionCreators(increment,store.dispatch)
export default class Counter1 extends Component {
  state = {number:store.getState().number}
  componentDidMount(){
   this.unsubscribe =  store.subscribe(()=>{
      this.setState({
        number:store.getState().number
      })
    })
  }
  componentWillUnmount(){
    this.unsubscribe()
  }
  render(){
   
    return(
      <>
        <div>{this.state.number}</div>
        <button onClick={action.increment}>+</button>
        {/* <button onClick={}>-</button> */}
      </>
    )
  }
}