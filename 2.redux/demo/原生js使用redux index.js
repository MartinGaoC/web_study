import {createStore} from './redux';

let counterVal = document.getElementById('counterVal');
let addButton = document.getElementById('addButton');
let minusButton = document.getElementById('minusButton');
const ADD = 'ADD';
const MINUS = 'MINUS';
function reducer (state={number:0},action){
    switch(action.type) {
        case ADD:
            return {number:state.number+1}
        case MINUS:
            return {number:state.number-1}
        default:
            return state
    }
}
let store = createStore(reducer);
function render (){
    console.log(store.getState().number)
    counterVal.innerHTML = store.getState().number;
}
render();
store.subscribe(render);
addButton.addEventListener('click', ()=>{
    store.dispatch({type:ADD})
})

minusButton.addEventListener('click', ()=>{
    store.dispatch({type:MINUS})
})