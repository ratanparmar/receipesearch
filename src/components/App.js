import React , { Component } from 'react'
import RecipeList from './RecipeList'
import Searchbar from './Searchbar'
import '../style/index.css'
// import FavouriteRecipe from './FavouriteRecipe'

class App extends Component{
    render(){
        return(
            <div>
                <h2> Welcome to food finder!
                </h2>
                <div className="App">
                    <Searchbar/>
                    <RecipeList/>
                   
                </div>
            </div>
        )
    }
}

export default App;