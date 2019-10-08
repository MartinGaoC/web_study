import React from 'react';
import ReactDom from 'react-dom';
// 非受控组件 指的是dom元素的值存在dom元素的内部 不受React控制
// 受控组件值得是DOM元素显示的值受React状态控制
class Form extends React.Component{
    constructor(props){
        super(props)
        this.state={text:"hello"}
    }
    add = () => {
        console.log(this.state.text)
    }
    handleChange= (event) => {
       
        this.setState({text:event.target.value});
    }
    render(){
        return(
            <>
                <input value={this.state.text} onChange={this.handleChange}/>
                <button onClick={this.add}>add</button>
            </>
        )
    }
}

ReactDom.render(<Form/>,document.getElementById('root'));