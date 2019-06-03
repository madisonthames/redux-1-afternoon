import {createStore} from 'redux';

const initialState = {
    recipeName: '',
    recipeCategory: '',
    authorFirstName: '',
    authorLastName: '',
    ingredients: [],
    instructions: [],
    recipes: []
}

export const UPDATE_RECIPE_NAME = 'UPDATE_RECIPE_NAME'
export const UPDATE_RECIPE_CATEGORY = 'UPDATE_RECIPE_CATEGORY'
export const UPDATE_AUTHOR_FIRST_NAME = 'UPDATE_AUTHOR_FIRST_NAME'
export const UPDATE_AUTHOR_LAST_NAME = 'UPDATE_AUTHOR_LAST_NAME'
export const UPDATE_INGREDIENTS= 'UPDATE_INGREDIENTS'
export const UPDATE_INSTRUCTIONS = 'UPDATE_INSTRUCTIONS'
export const UPDATE_RECIPES = 'UPDATE_RECIPES'

function reducer(state=initialState, action) {
    switch(action.type) {
        case UPDATE_RECIPE_NAME:
            return {
                ...state,
                recipeName: action.payload
            }
        case UPDATE_RECIPE_CATEGORY:
            return {
                ...state,
                recipeCategory: action.payload
            }
        case UPDATE_AUTHOR_FIRST_NAME:
            return {
                ...state,
                authorFirstName: action.payload
            }
        case UPDATE_AUTHOR_LAST_NAME:
            return {
                ...state,
                authorLastName: action.payload
            }
        case UPDATE_INGREDIENTS:
            console.log(action.payload)
            const newIngredients = [
                ...state.ingredients, action.payload
            ]
            return {
                ...state,
                ingredients: newIngredients
            }
        case UPDATE_INSTRUCTIONS:
            const newInstructions = [
                ...state.instructions, action.payload
            ]
            return {
                ...state,
                instructions: newInstructions
            }
        case UPDATE_RECIPES:
            const {
                recipeName,
                recipeCategory,
                authorFirstName,
                authorLastName,
                ingredients,
                instructions
            } = state;

            const recipe = {
                recipeName,
                recipeCategory,
                authorFirstName,
                authorLastName,
                ingredients,
                instructions
            }

            const newRecipes = [
                ...state.recipes, recipe
            ]

            return {
                ...state,
                recipes: newRecipes
            }
        default: return state;
    }
}

export default createStore(reducer);
