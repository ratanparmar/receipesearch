import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route ,Switch ,Redirect }from 'react-router-dom'
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
    <Switch>
        <Route exact path='/' component={App}/>
        <Route path='/favourites' component={FavouriteRecipe}/>
    </Switch>
    </BrowserRouter>
    </Provider>)
    ,document.getElementById('root'))