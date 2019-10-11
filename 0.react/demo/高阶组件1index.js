import React from 'react';
import ReactDOM from 'react-dom';
// 高阶组件  一般需要一个函数  传入一个老组件 返回一个新组件
function withLogger(OldComponent){
    return class extends React.Component{
        UNSAFE_componentWillMount(){
            this.start = Date.now(); // 在组件将要挂载的时候记录一个当前的时间戳
        }
        componentDidMount(){
            console.log('本次渲染共花费'+(Date.now()-this.start)+'ms')
        }
        render(){
            return <OldComponent {...this.props}/>
        }
    }
}
class Counter extends React.Component{
    
    render(){
        return(
            <div>
                <p>{this.props.number}</p>
            </div>
        )
    }
}
const ConterWithLogger = withLogger(Counter);
ReactDOM.render(<ConterWithLogger number={100}/>, window.root) 