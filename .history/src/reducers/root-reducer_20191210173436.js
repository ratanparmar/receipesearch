import { SET_RECIPE }from '../actions'

function recipereducer(state=[],action){
    switch(action.type){
        case 'SET_RECIPE':
            return action.items;
    }

}
