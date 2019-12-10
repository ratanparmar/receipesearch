import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import {createStore} from 'redux'
import rootReducer from './reducers/root-reducer'
import Provider from 'react-redux'

var store = createStore(rootReducer);
store.subscribe(()=> console.log(store.getState()));

ReactDOM.render(
    <Provider store ={store}>
        <App/>
    </Provider> 
    ,document.getElementById('root'))