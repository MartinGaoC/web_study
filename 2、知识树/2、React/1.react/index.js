class Component{
    constructor(props){
        this.props = props;
    }
    createDOMFromDOMString(domString){
        let div = document.createElement('div');
        div.innerHTML = domString;
        return div.children[0];
    }
    setState(partcialState){
        this.state = Object.assign(this.state,partcialState);
        let oldElement =  this.domElement;
        let newElement = this.renderElement();
        oldElement.parentElement.replaceChild(newElement,oldElement);
    }
    renderElement(){
        let renderString = this.render();
        this.domElement = this.createDOMFromDOMString(renderString);
        this.domElement.component = this;
        // this.domElement.addEventListener('click',this.add.bind(this));
        return this.domElement;
    }
    mount(container){
        console.log(container)
        container.appendChild(this.renderElement());
    }
}

window.trigger = function(event,method){
    console.log(event,method)
    event.target.component[method].call(event.target.component,event)
}
class Counter extends Component{
    constructor(props){
        console.log(props)
        super(props);
        this.state = {number: 0}
    }
    
    add(){
        this.setState({number:this.state.number+1})
    }
    render(){
        
        
        return `<button id="counter-app" onclick="trigger(event,'add')">${this.props.name}${this.state.number}</button>` ;
    }
}