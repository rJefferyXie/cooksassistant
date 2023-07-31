interface Instruction {
  number: number,
  step: string
}

interface Instructions {
  name: string,
  steps: Instruction[]
}

interface Recipe {
  id: number,
  title: string,
  image: string,
  spoonacularSourceUrl: string,
  readyInMinutes: number,
  servings: number,
  vegetarian: boolean,
  vegan: boolean,
  glutenFree: boolean,
  dairyFree: boolean,
  aggregatelikes: number,
  healthScore: number,
  analyzedInstructions: Instructions[]
}

export default Recipe;