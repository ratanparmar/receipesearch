// eslint-disable-next-line
import React from 'react'
import ReactDOM from 'react-dom'
// eslint-disable-next-line
import {BrowserRouter, Route ,Switch ,Redirect }from 'react-router-dom'
import App from './components/App'
import {createStore,applyMiddleware} from 'redux'
import rootReducer from './reducers/root-reducer'
import { Provider }from 'react-redux'
import FavouriteRecipe from './components/FavouriteRecipe'
import RecipeDetail from './components/RecipeDetails'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
var store = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger)));
//store.subscribe(()=> console.log(store.getState()));

ReactDOM.render((
    <Provider store ={store}>
    <BrowserRouter>
    <Switch>
        <Route exact path='/' component={App}/>
        <Route path='/favourites' exact component={FavouriteRecipe}/>
        <Route path='/favourites/:name' component={RecipeDetail} />
    </Switch>
    </BrowserRouter>
    </Provider>)
    ,document.getElementById('root'))