import React,{Component} from 'react';
import store from '../store';
import * as types from '../store/action-types';
import {bindActionCreators} from '../redux/'
function increment(payload){  // actionCreator  action创建的函数
    return{
        type:types.INCREMENT,
        payload
    }
}
function decrement(payload){
    return{
        type:types.DECREMENT,
        payload
    }
}
let actions = {increment,decrement};
// bindActionCreators 绑定 actionCeators actionCreators 跟dispatch自动绑定在一起
// let increments = bindActionCreators(increment,store.dispatch);
// let decrements = bindActionCreators(decrement,store.dispatch);
actions = bindActionCreators(actions,store.dispatch);
export default class Counter extends Component{

    state={number:store.getState().number}
    componentDidMount(){
        
        this.unsubscribe = store.subscribe(()=>{
            this.setState({number:store.getState().number});
        });
    }
    componentWillUnmount(){
        this.unsubscribe();
    }
    render(){
        return(
            <div>
                <p>{this.state.number}</p>
                <button onClick={()=>actions.increment(2)}>+</button>
                <button onClick={()=>actions.decrement(3) }>-</button>
            </div>
        )
    }
}