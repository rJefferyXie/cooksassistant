// Axios
import axios from 'axios';

interface RecipeParams {
  query: string,
  cuisines: string[],
  diets: string[],
  intolerances: string[]
}

const getRecipes = async (params: RecipeParams) => {
  try {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?` +
      `query=${params.query}` + 
      (params.cuisines.length ? `&cuisines=${params.cuisines}` : '') +
      (params.diets.length ? `&diets=${params.diets}` : '') +
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

    return response.data.results;
  } catch (error: any) {
    console.error('Error:', error.message);
  }
}

export default getRecipes;