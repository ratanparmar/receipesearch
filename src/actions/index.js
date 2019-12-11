export const SET_RECIPE = 'SET_RECIPE';
export const FAV_RECIPE = 'FAV_RECIPE';

export default function setrecipes(items){
    return{
    type:'SET_RECIPE',
    items
    }
}
export  function favRecipe(recipe){
    return{
        type:'FAV_RECIPE',
        recipe

    }
}