import React,{Component} from 'react';
import store from '../store';
import * as types from '../store/action-types';
export default class Counter extends Component{
    // constructor(){
    //    state={
    //        unsubscribe
    //    } 
    // }
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
                <button onClick={()=>store.dispatch({type:types.INCREMENT})}>+</button>
                <button onClick={()=>store.dispatch({type:types.DECREMENT})}>-</button>
            </div>
        )
    }
}