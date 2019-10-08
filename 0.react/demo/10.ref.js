import React from 'react';
import ReactDom from 'react-dom';

class Form extends React.Component{
    constructor(props){
        super(props)
        this.textInput = React.createRef();
    }
    getFocus = () => {
       
        this.textInput.current.focus();
    }
    render(){
        return(
            <>
                <TextInput3 ref1={this.textInput}/>
                <button onClick={this.getFocus}>focus</button>
            </>
        )
    }
}
function TextInput2(props, ref){
    return <input ref={ref}/>
}

let TextInput3 =  forwardRef(TextInput2)

function forwardRef(funcComponent){
    return function(props){ // 
        return TextInput2(props,props.ref1)
    }
}
class TextInput extends React.Component{
    constructor(props){
        super(props)
        this.textInput = React.createRef();
    }
    render(){
        return <input ref={this.textInput}/>
    }
}

ReactDom.render(<Form/>,document.getElementById('root'));