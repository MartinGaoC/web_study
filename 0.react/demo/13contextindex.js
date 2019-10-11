import React from 'react';
import ReactDOM from 'react-dom';

function createContext(){
    class Provider extends React.Component{
        static value; //给 Provider 定义了一个静态属性'
        
        constructor(props){
            super(props);
            Provider.value = props.value;
            // this.state={value:props.value}
        }
        static getDerivedStateFromProps(nextProps,prevState){
            Provider.value =  nextProps.value;
            // return {value: nextProps.value}
        }
        render(){
            return this.props.children;
        }
    }
    class Consumer extends React.Component{
        render(){
            return this.props.children(Provider.value);
        }
    }
    return {
        Provider,Consumer
    }
}




let ColorContext = React.createContext(); // 返回一个context实例







// Context Provder 负责提供数据  Context.Consumer 负责获取数据
// 获取或者使用Context数据有两种方式，分别对应函数组件和类组件
class Panel extends React.Component{
    state = {color:'red'} 
    changeColor = (color) => {
        this.setState({color});
    }
    render(){
        let contextValue = {color:this.state.color,changeColor:this.changeColor};
        return (
            <ColorContext.Provider value = {contextValue}>
                <div style={{border:`5px solid ${this.state.color}`,padding:"5px"}}>
                    Panel
                    <Header ></Header>
                    <Main ></Main>
                </div>
            </ColorContext.Provider>

        )
    }
}
class Header extends React.Component{
    static contextType = ColorContext
    render(){
        return (
            <div style={{border:`3px solid ${this.context.color}`,padding:"5px"}}>
                Header
                <Title />
            </div>
            
        )
    }
}



class Title extends React.Component{
    static contextType = ColorContext //给类增加一个静态属性contextType=ColorContext
    render(){
        return (
            <div style={{border:`3px solid ${this.context.color}`,padding:"5px"}}>
               Title
            </div>
            
        )
    }
}

function Main(props){
    return(
        <ColorContext.Consumer>
            {
                value=>(
                    <div style={{border:`3px solid ${value.color}`,padding:"5px"}}>
                        Main
                        <Contexts />
                    </div>
                )
            }
        </ColorContext.Consumer>
        
    )
}

function Contexts(){
    return(
        <ColorContext.Consumer>
            {
                value => (
                    <div style={{border:`3px solid ${value.color}`,padding:"5px"}}>
                        Contexts
                        <button onClick={()=>value.changeColor('green')}>变绿</button>
                        <button onClick={()=>value.changeColor('blue')}>变蓝</button>
                    </div>
                )
            }
        </ColorContext.Consumer>
        
    )
}


ReactDOM.render(<Panel/>, window.root)