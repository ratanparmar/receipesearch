import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route }from 'react-router-dom'
import App from './components/App'
import {createStore} from 'redux'
import rootReducer from './reducers/root-reducer'
import { Provider }from 'react-redux'
import FavouriteRecipe from './components/FavouriteRecipe'

var store = createStore(rootReducer);
store.subscribe(()=> console.log(store.getState()));

ReactDOM.render((
    <Provider store ={store}>
    <BrowserRouter>
    <div>

        <Route path ='/' componenet={App}/>
        <Route path='/favourites' componenet={FavouriteRecipe}/>

    </div>
    </BrowserRouter>
    </Provider>)
    ,document.getElementById('root'))