import { createStore } from '../redux';
// import reducer from './reducers/counter'
import reducers from './reducers'

let store = createStore(reducers)

export default store