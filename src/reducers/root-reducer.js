import  { combineReducers } from 'redux'
import { SET_RECIPE,FAV_RECIPE } from '../actions'


function recipereducer(state=[],action){
    switch(action.type){
        case SET_RECIPE:
            return action.items;
        default:
            return state;
    }
}

function starrerecipe(state=[],action){
    switch(action.type){
        case FAV_RECIPE:
            state = [...state,action.recipe];
            return state;
        default:
            return state;
    }
}
const rootReducer = combineReducers({recipereducer,starrerecipe});
export default rootReducer;
