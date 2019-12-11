import React,{ Component }from 'react';
import { connect } from 'react-redux';
import Recipecard from './Recipecard';

class FavouriteRecipe extends Component{

    render(){
        //let fav = this.props.starrerecipe;
        console.log(this.props);
        return(
            
            <div className="App">
                <h4>Favourite Recipe List:</h4>
                    {
                        this.props.favourite.map((fav,index)=>{
                            return(
                                <Recipecard 
                                key={index} 
                                recipe={fav}
                                favouriteButton ={false}/>
                            )
                        })
                    }    
            </div>            
        )
    }
}

function mapsStateToProps(state){
    return {
        favourite:state.starrerecipe
    }
}
export default connect(mapsStateToProps,null)(FavouriteRecipe);