import React, { Component } from 'react';
import '../style/index.css'

class RecipeCard extends Component{


    render(){
        console.log(this.props.recipeName.recipereducer)
        return(
        <div className="container">
            <div className="row">
           <div className="col-12 col-sm-8 col-md-6">
        {
            this.props.recipeName.recipereducer.map(
                (recipe,index) => 
                    {
                        return(
                            <div key={index}  className="card">
                                
                                <div className="card-img">
                                <a href={recipe.href} target="blank" className="btn btn-light btn-sm"> 
                                    {recipe.title}
                                </a>
                                </div>
                                <div className="card-body">
                                <p className="card-text">
                                {recipe.ingredients}
                                </p>
                                </div>
                                <img 
                                src={recipe.thumbnail} 
                                alt={recipe.title}
                                className="card-img"/>
                                
                            </div>
                        )
                    }
            )
        }
        </div>
        </div>
        </div>
        )
    }
}

export default RecipeCard;