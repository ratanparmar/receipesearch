import { SET_RECIPE }from '../actions'
import  { combineReducers } from 'redux'

function recipereducer(state=[],action){
    switch(action.type){
        case SET_RECIPE:
            return action.items;
    }
}
const rootReducer = combineReducers(recipereducer);
export default rootReducer;
