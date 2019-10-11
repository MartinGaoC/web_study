import React from 'react';
import ReactDom from 'react-dom';
// 非受控组件 指的是dom元素的值存在dom元素的内部 不受React控制
// 受控组件值得是DOM元素显示的值受React状态控制
// class Form extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={text:"hello"}
//     }
//     add = () => {
//         console.log(this.state.text)
//     }
//     handleChange= (event) => {
       
//         this.setState({text:event.target.value});
//     }
//     render(){
//         return(
//             <>
//                 <input value={this.state.text} onChange={this.handleChange}/>
//                 <button onClick={this.add}>add</button>
//             </>
//         )
//     }
// }

// function handleClick(){
//     alert('1')
// }
// let element = React.createElement('h1', {
//     id:'title',
//     classNamae: 'bg',
//     onClick: handleClick,
//     style:{
//         color: 'red'
//     }
// }, 'hello', React.createElement('span', null, 'world'));


function Hello2 (props){
    return (
        React.createElement('h1', {
            id:'title',
            classNamae: 'bg',
            style:{
                color: props.color
            }
        }, 'hello', React.createElement('span', null, 'world'))
    )
}
class Hello extends React.Component {
    render (){
        return (
            React.createElement('h1', {
                id:'title',
                classNamae: 'bg',
                style:{
                    color: this.props.color
                }
            }, 'hello', React.createElement('span', null, 'world'))
        )
    }
}
let element = React.createElement(Hello,{color:'red'});

ReactDom.render(element,document.getElementById('root'));