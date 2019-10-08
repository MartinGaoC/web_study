import React from 'react';
import ReactDOM from 'react-dom';


// class Welcome extends React.Component{
//     render(){
//         return <h1>hello {this.props.name} {this.props.age}</h1>;
//     }
// }


// let data = {name:'zhufeng',age:10};
// let element = (
//     <h1 className="title" style={{color:'red',fontSize:'50px'}}>
//         hello <span>world</span>
//     </h1>
// )
// let element = React.createElement("h1", {
//     className:'title',
//     style:{
//         color:'red',
//         fontSize:'50px',
//     }
// },'hello',React.createElement("span",null,"world"));


// function Welcome(props){
//     return  React.createElement('h1',{id:'welcome'},props.name,props.age)
// }

// let element = React.createElement(Welcome,{name:'zhufeng',age:10});

// ReactDOM.render(element, document.getElementById('root'));








class Sum extends React.Component{
    add =()=>{
        let numA = this.refs.numA.value;
        let numB = this.refs.numB.value;
        let result = parseFloat(numA) + parseFloat(numB);
        this.refs.result.value = result;
    }
    render(){
        return(
            <>
                <input ref="numA"/>+<input ref="numB"/><button onClick={this.add}>=</button><input ref="result"/>
            </>
        )
    }
}

function createRef(){
    return { current:null }   // ref会吧真实的dom赋值给current属性
}
class Sum2 extends React.Component{
    constructor(props){
        super(props);
        this.numA = React.createRef();
        this.numB = React.createRef();
        this.result = React.createRef();
    }
    add =()=>{
        console.log(this.numA)
        let numA = this.numA.current.value;
        let numB = this.numB.current.value;
        let result = parseFloat(numA) + parseFloat(numB);
        this.result.current.value = result;
    }
    render(){
        return(
            <>
                <input ref={this.numA}/>+<input ref={this.numB}/><button onClick={this.add}>=</button><input ref={this.result}/>
            </>
        )
    }
}
ReactDOM.render(<Sum2/>, document.getElementById('root'));