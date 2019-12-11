import React, { Component } from 'react';
import '../style/index.css';
import { connect } from 'react-redux';
import { favRecipe } from '../actions';


class RecipeCard extends Component{
    constructor(){
        super()
        this.state = {
            isFav:false
        }
    }

    favourite(recipe) {
        this.props.favRecipe(recipe);
        this.setState({isFav:true})
        
    }
    render(){
        
        let recipe = this.props.recipe;
        
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-8 col-md-6">
                        {
                            <div className="card">
                                {
                                    this.props.favouriteButton
                                    ?
                                        this.state.isFav 
                                        ? <div className='star'>&#9733;</div>
                                        : <div className='star' 
                                        onClick={()=>this.favourite(recipe)}>&#9734;
                                        </div>
                                    :<div className="star"></div> 
                                }
                                
                                <div>
                                    <a href={recipe.href} target="blank" className="btn btn-light btn-sm"> 
                                        {recipe.title}
                                    </a>
                                </div>
                                <div className="card-body">
                                    <p className="card-text">
                                    {recipe.ingredients}
                                    </p>
                                    <img 
                                    src={recipe.thumbnail} 
                                    alt={recipe.title}
                                    className="card-img"/>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null,{favRecipe})(RecipeCard);