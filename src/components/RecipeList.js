import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import RecipeCard from './Recipecard'
import '../style/index.css'

class RecipeList extends Component{
    render(){
        // console.log('this.props',this.props)
        return (
            <div>{
                this.props.starrerecipe.length>0
                ? <h4 className='link'><Link to ='/favourites'>favourites</Link></h4>
                : <div></div>   
            }         
                {
                    this.props.recipereducer.map((recipe,index)=>{
                        return(
                        <RecipeCard 
                        key ={index} 
                        recipe={recipe}
                        favouriteButton={true}/>
                        )
                    })
                }
            </div>
        )}
        
    }

function mapStateToProps(state){
  return state;
}
export default connect(mapStateToProps,null)(RecipeList);