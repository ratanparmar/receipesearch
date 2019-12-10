import React, { Component } from 'react'
import { connect } from 'react-redux'

class RecipeList extends Component{
    render(){
        console.log('this.props',this.props)
        return (
            <div>
                {
                    this.props.recipereducer.map(recipe=>{
                        <h2>{recipe.title}</h2>
                    })
                }
            </div>
        )
    }
}


function mapStateToProps(state){
    return state;
}
export default connect(mapStateToProps,null)(RecipeList)