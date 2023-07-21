// Redux
import { PayloadAction } from '@reduxjs/toolkit';

// Types
import { RECIPE } from '../types';

const initialState = {
  recipe: '',
  recipes: []
}

const RecipeReducer = (state = initialState, action: PayloadAction) => {
  switch (action.type) {
    case RECIPE.VIEW_RECIPE: {
      return {
        ...state,
        recipe: action.payload,
      }
    }

    case RECIPE.EXIT_RECIPE: {
      return {
        ...state,
        recipe: ''
      }
    }

    case RECIPE.SET_RECIPES: {
      return {
        ...state,
        recipes: action.payload
      }
    }

    default: {
      return state;
    }
  }
}

export default RecipeReducer;