// Axios
import axios from 'axios';

interface RecipeParams {
  query: string,
  diets: string[],
  types: string[],
  cuisines: string[],
  intolerances: string[]
}

const getRecipes = async (params: RecipeParams) => {
  try {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?` +
      `query=${params.query}` + 
      (params.diets.length ? `&diet=${params.diets}` : '') +
      (params.types.length ? `&type=${params.types}` : '') +
      (params.cuisines.length ? `&cuisine=${params.cuisines}` : '') +
      (params.intolerances.length ? `&intolerances=${params.intolerances}` : '') +
      `&instructionsRequired=true` +
      `&addRecipeInformation=true` +
      `&addRecipeNutrition=true` +
      `&number=10`, {
      headers: {
        'x-api-key': process.env.NEXT_PUBLIC_SPOONACULAR_KEY
      }
    });

    console.log(params)
    console.log(response.data.results)

    return response.data.results;
  } catch (error: any) {
    console.error('Error:', error.message);
  }
}

export default getRecipes;