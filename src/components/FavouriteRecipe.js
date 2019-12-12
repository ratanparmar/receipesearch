import React,{ Component }from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import Recipecard from './Recipecard';
import '../style/index.css'
class FavouriteRecipe extends Component{

    render(){
        //let fav = this.props.starrerecipe;
        console.log(this.props);
        return(
            
            <div >
                <h4 className='link'><Link to ='/'>Home</Link></h4>
                <h4 className="App1">Favourite Recipe List:</h4>
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