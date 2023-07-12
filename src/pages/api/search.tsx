import axios from 'axios';

interface RecipeParams {
  cuisine?: string,
  diet?: string,
  intolerance?: string
}

async function getRecipes(params: RecipeParams) {
  try {
    const response = await axios.get('https://api.spoonacular.com/recipes/complexSearch', {
      params: {
        apiKey: process.env.NEXT_PUBLIC_SPOONACULAR_KEY,
        cuisine: params.cuisine,
        diet: params.diet,
        intolerance: params.intolerance,
        includeNutrition: false // Set it to true if you want to include nutrition information
      }
    });

    // Handle the response data
    const recipeData = response.data;
    console.log('Recipe Title:', recipeData.title);
    console.log('Recipe Instructions:', recipeData.instructions);


  } catch (error: any) {
    console.error('Error:', error.message);
  }
}

export default getRecipes;