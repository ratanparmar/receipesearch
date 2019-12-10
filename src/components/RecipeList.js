import React, { Component } from 'react'
import { connect } from 'react-redux'
import RecipeCard from './Recipecard'
import '../style/index.css'

class RecipeList extends Component{
    render(){
        console.log('this.props',this.props)
        return (
            <div className="recipe">
                <RecipeCard recipeName={this.props}/>
            </div>
        )
    }
}


function mapStateToProps(state){
    return state;
}
export default connect(mapStateToProps,null)(RecipeList)