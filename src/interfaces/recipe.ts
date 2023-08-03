interface Instruction {
  number: number,
  step: string
}

interface Instructions {
  name: string,
  steps: Instruction[]
}

interface Ingredient {
  name: string,
  amount: number,
  unit: string
}

interface Nutrition {
  caloricBreakdown: {
    percentCarbs: number,
    percentFat: number,
    percentProtein: number
  },
  ingredients: Ingredient[]
}

interface Recipe {
  id: number,
  title: string,
  image: string,
  spoonacularSourceUrl: string,
  readyInMinutes: number,
  servings: number,
  summary: string,
  nutrition: Nutrition,
  vegetarian: boolean,
  vegan: boolean,
  glutenFree: boolean,
  dairyFree: boolean,
  aggregatelikes: number,
  healthScore: number,
  analyzedInstructions: Instructions[]
}

export default Recipe;