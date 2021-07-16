export const SET_RECIPE = 'SET_RECIPE';
export const FAV_RECIPE = 'FAV_RECIPE';
export const UNFAV_RECIPE = 'UNFAV_RECIPE';

export default function setrecipes(items){
    return{
    type:'SET_RECIPE',
    items
    }
}
export  function favRecipe(recipe){
    console.log(recipe)
    return{
        type:'FAV_RECIPE',
        recipe

    }
}
export  function unFavRecipe(recipe){
    // console.log(recipe)
    return{
        type:'UNFAV_RECIPE',
        recipe

    }
}