// Types
import { RECIPE } from "../types";

// Interfaces
import Recipe from "@/interfaces/recipe";

const viewRecipe = (recipe: Recipe) => {
  return {
    type: RECIPE.VIEW_RECIPE,
    payload: recipe
  }
}

const exitRecipe = () => {
  return {
    type: RECIPE.EXIT_RECIPE
  }
}

const setRecipes = (recipes: Recipe[]) => {
  return {
    type: RECIPE.SET_RECIPES,
    payload: recipes
  }
}

const RecipeActions = {
  viewRecipe,
  exitRecipe,
  setRecipes
}

export default RecipeActions;