import React, { Component } from 'react';
import '../style/index.css';
import { connect } from 'react-redux';
import { favRecipe,unFavRecipe } from '../actions';
import { Link } from 'react-router-dom'

class RecipeCard extends Component{
    constructor(){
        super()
        this.state = {
            isFav:false
        }
    }
    // componentDidMount(){
    //     let recipe = this.props.recipe;
    //     //console.log("hiiiiiiiiiiiiiii component mounting")
        
    // }

    favourite(recipe) {
        let flag = true
        recipe['flag'] = flag
        this.props.favRecipe(recipe);
    }
    
    unfavourite(recipe) {
        this.props.unFavRecipe(recipe);
    }
    render(){
        let favFlag = false
        let recipe = this.props.recipe;
        Object.keys(this.props.starrerecipe).map((fav)=>{
            if(this.props.starrerecipe[fav].recipe.label === recipe.recipe.label){
                favFlag = this.props.starrerecipe[fav].flag
            }
        })

        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-8 col-md-6">
                        {
                            <div className="card">
                                {
                                    this.props.favouriteButton
                                    ?
                                    favFlag 
                                        ? <div className='star'
                                        onClick={()=>this.unfavourite(recipe)}
                                        >&#9733;</div>
                                        : <div className='star' 
                                        onClick={()=>this.favourite(recipe)}>&#9734;
                                        </div>
                                    :<div className="star"></div> 
                                }
                                
                                <div>
                                    {/* <a href={recipe.href} target="blank" className="btn btn-light btn-sm">  */}
                                        
                                        <Link to ={`/favourites/${recipe.recipe.label}`} className="btn btn-light btn-sm">{recipe.recipe.label}</Link>
                                    {/* </a> */}
                                </div>
                                <div className="card-body">
                                    <p className="card-text" >
                                    {recipe.recipe.ingredientLines}
                                    </p>
                                    <img style={{float:'left'}}
                                    src={recipe.recipe.image} 
                                    alt={recipe.recipe.label}
                                    className="card-img"/>
                                    {recipe.recipe.cuisineType?<p className="card-text"><span className="btn btn-light btn-sm">CuisineType:</span>{recipe.recipe.cuisineType}</p>:''}
                                    
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        starrerecipe:state.starrerecipe
    }
  }

export default connect(mapStateToProps,{favRecipe,unFavRecipe})(RecipeCard);