// React + Next
import { useRouter } from "next/router";

// Redux
import { useDispatch, useSelector } from "react-redux";
import recipeActions from "@/store/actions/recipeActions";
import SearchActions from "@/store/actions/searchActions";

// Components
import SearchFilters from "@/components/searchFilters";
import RecipePreview from "@/components/recipePreview";
import SearchExample from "@/components/searchExample";

// Interfaces
import Recipe from "@/interfaces/recipe";
import RecipeParams from "@/interfaces/recipeSearch";

// Constants
import Diets from "@/constants/diets";
import Types from "@/constants/types";
import Cuisines from "@/constants/cuisines";
import Intolerances from "@/constants/intolerances";

// API
import getRecipes from "./api/search";

// Images
import asianChicken from '../../public/images/asian-chicken.jpg';
import veganGlutenFree from '../../public/images/vegan-gluten-free.jpg';
import chocolateDesserts from '../../public/images/chocolate-desserts.jpg';

const Recipes = () => {
  const router = useRouter();

  // Redux
  const dispatch = useDispatch();
  const recipeState = useSelector((state: any) => state.recipe);
  const searchState = useSelector((state: any) => state.search);

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    SearchActions.setQuery(e.target.value);
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.code === "Enter") {
      search();
    }
  }

  const search = (customParams?: RecipeParams) => {
    const params = {
      query: searchState.query,
      diets: searchState.diets,
      types: searchState.types,
      cuisines: searchState.cuisines,
      intolerances: searchState.intolerances
    }

    getRecipes(customParams || params).then((recipes) => {
      dispatch(recipeActions.setRecipes(recipes));
    });
  }

  const navigate = (destination: string) => {
    const cleanURL = destination.replace("https://spoonacular.com/", "");
    router.push("recipes/" + cleanURL);
  }

  return (
    <div className="bg-white h-screen w-screen flex flex-col">
      <div className="flex flex-col h-5/6 mt-24 w-full px-10">
        <div className="flex h-full w-full">
          <div className="flex-col p-4 w-80 h-full rounded-md overflow-auto border border-gray-200">
            <p className="text-slate-900 font-semibold text-center w-full">Enter Ingredient or Dish</p>
            <input 
              className="border border-gray-200 p-1 mt-1 w-full rounded-md text-slate-900" 
              placeholder="Ex. Spring Rolls, Chicken, Tofu, ..." 
              value={searchState.query} 
              onKeyDown={handleKeyDown}
              onChange={handleQueryChange}
            />

            <SearchFilters 
              label="Diet" 
              filters={Diets} 
              selectedFilters={searchState.diets} 
              changeFilter={(diets: string[]) => dispatch(SearchActions.setDiets(diets))}
            />

            <SearchFilters 
              label="Type" 
              filters={Types} 
              selectedFilters={searchState.types} 
              changeFilter={(types: string[]) => dispatch(SearchActions.setTypes(types))}
            />

            <SearchFilters 
              label="Cuisine" 
              filters={Cuisines} 
              selectedFilters={searchState.cuisines} 
              changeFilter={(cuisines: string[]) => dispatch(SearchActions.setCuisines(cuisines))}
            />

            <SearchFilters 
              label="Intolerance" 
              filters={Intolerances} 
              selectedFilters={searchState.intolerances} 
              changeFilter={(intolerances: string[]) => dispatch(SearchActions.setIntolerances(intolerances))}
            />
          
            <button className="mt-4 mb-0 w-full" onClick={() => search()}>
              <p className="rounded-md bg-sky-700 px-3.5 py-2.5 cursor-pointer text-sm font-semibold text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">
                Search Recipes!
              </p>
            </button>
          </div>

          <div className="flex flex-wrap overflow-auto content-center justify-center w-full h-full rounded-md border border-l-0 border-gray-200 relative">
            <div className="absolute w-full h-full bg-gradient-to-tr from-cyan-400 via-blue-400 to-pink-400 opacity-5"></div>
            
            {!recipeState.recipes.length && 
              <div className="flex flex-col h-full w-full text-slate-900 z-10">
                <p className="m-auto mb-1 font-semibold">Search For Your New Favourite Recipes!</p>
                <ul className="m-auto my-1 list-disc">
                  <li>Tailor your search to match your specific diet! Choose from 11 different dietary options to filter your search results.</li>
                  <li>Embark on a culinary adventure with our extensive range of 14 delightful meal types, including breakfasts, appetizers, and desserts!</li>
                  <li>Indulge your cravings with a world of flavors! Explore our diverse selection of 27 cuisines from around the world.</li>
                  <li>Filter recipes based on your dietary needs and restrictions!</li>
                </ul>
                <p></p>

                <p className="m-auto m8-4 mb-1 font-semibold">Examples</p>
                <div className="flex justify-center mb-auto">
                  <SearchExample image={asianChicken.src} label={"Asian-Inspired Chicken Recipes"} query={"Chicken"} cuisines={["Asian"]} search={search}></SearchExample>
                  <SearchExample image={veganGlutenFree.src} label={"Vegan & Gluten Free"} query={""} diets={["Vegan"]} intolerances={["Gluten"]} search={search}></SearchExample>
                  <SearchExample image={chocolateDesserts.src} label={"Chocolate Desserts"} query={"Chocolate"} types={["Dessert"]} search={search}></SearchExample>
                </div>
              </div>
            }
            
            {recipeState.recipes.map((recipe: Recipe, idx: number) => {
              return (
                <RecipePreview 
                  key={idx} 
                  recipe={recipe} 
                  navigate={navigate}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Recipes;