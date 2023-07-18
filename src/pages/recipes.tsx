// React + Next
import { useState } from "react";
import { useRouter } from "next/router";
import ExportedImage from "next-image-export-optimizer";

// Components
import Navbar from "@/components/navbar";
import SearchFilters from "@/components/searchFilters";

// Interfaces
import Recipe from "@/interfaces/recipe";

// Constants
import Diets from "@/constants/diets";
import Cuisines from "@/constants/cuisines";
import Intolerances from "@/constants/intolerances";

// API
import getRecipes from "./api/search";

const Recipes = () => {
  const router = useRouter();

  // Search Params
  const [query, setQuery] = useState('');
  const [diets, setDiets] = useState<string[]>([]);
  const [cuisines, setCuisines] = useState<string[]>([]);
  const [intolerances, setIntolerances] = useState<string[]>([]);

  // Search Results
  const [recipes, setRecipes] = useState([]);

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  }

  const search = () => {
    const params = {
      query: query,
      diets: diets,
      cuisines: cuisines,
      intolerances: intolerances
    }

    getRecipes(params).then((recipes) => {
      setRecipes(recipes);
    });
  }

  const navigate = (destination: string) => {
    router.push(destination);
  }

  return (
    <div className="bg-white overflow-auto h-screen w-screen flex flex-col">
      <Navbar></Navbar>

      <div className="flex flex-col h-5/6 mt-24 w-full px-10">
        <div className="flex h-full w-full">
          <div className="flex-col p-4 w-80 h-full overflow-auto border border-gray-200">
            <label className="text-slate-900 font-semibold text-center w-full">Enter Ingredient or Dish</label>
            <input 
              className="border border-gray-200 p-1 mt-1 w-full rounded-md text-slate-900" 
              placeholder="Ex. Chicken Tacos, Beef Stew, ..." 
              value={query} 
              onChange={handleQueryChange}
            />

            <SearchFilters label="Diet" filters={Diets} selectedFilters={diets} changeFilter={setDiets}></SearchFilters>
            <SearchFilters label="Cuisine" filters={Cuisines} selectedFilters={cuisines} changeFilter={setCuisines}></SearchFilters>
            <SearchFilters label="Intolerance" filters={Intolerances} selectedFilters={intolerances} changeFilter={setIntolerances}></SearchFilters>
          
            <button className="mt-4 mb-0 w-full" onClick={search}>
              <p className="rounded-md bg-sky-700 px-3.5 py-2.5 cursor-pointer text-sm font-semibold text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">
                Search Recipes!
              </p>
            </button>
          </div>

          <div className="flex flex-wrap overflow-auto bg-slate-50 content-start justify-center p-2 w-full h-full border border-gray-200">
            {!recipes.length && 
              <div className="flex flex-col h-full w-full text-slate-900">
                <p className="m-auto">
                  Try searching for a recipe!
                </p>
                <p>
                  
                </p>
              </div>
            }
            
            {recipes.map((recipe: Recipe, idx: number) => {
              return (
                <div 
                  className="w-64 h-64 cursor-pointer relative shadow-sm shadow-black rounded-md m-3 hover:brightness-110" 
                  key={idx}
                  onClick={() => navigate('recipes/' + recipe.title.replace(" ", "-") + "-" + recipe.id)}
                >
                  <ExportedImage 
                    fill
                    style={{ objectFit: "cover" }}      
                    src={recipe.image}
                    alt={`An image of ${recipe.title}`}
                    className="rounded-md"
                  />
                  <div className="text-slate-900 py-1 rounded-b-md w-full flex bg-zinc-700 bottom-0 absolute">
                    <p className="text-white text-center capitalize truncate w-5/6 m-auto">{recipe.title}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Recipes;