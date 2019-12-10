import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import {createStore} from 'redux'
import rootReducer from './reducers/root-reducer'


var store = createStore(rootReducer);
store.subscribe(()=> console.log(store.getState()));

ReactDOM.render( <App/>,document.getElementById('root'))