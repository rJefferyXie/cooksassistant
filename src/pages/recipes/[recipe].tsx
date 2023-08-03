// React + Next
import { useRouter } from 'next/router';

// Redux
import { useDispatch, useSelector } from "react-redux";
import recipeActions from "@/store/actions/recipeActions";

// Interface
import Recipe from "@/interfaces/recipe";

const Recipe = () => {
  const router = useRouter();

  // Redux
  const dispatch = useDispatch();
  const recipe: Recipe = useSelector((state: any) => state.recipe.recipe);

  const parseHTML = (content: string) => {
    const parser = new DOMParser();
    const parsedHTML = parser.parseFromString(content, 'text/html');

    const elements = Array.from(parsedHTML.body.childNodes).map((node: any, index) => {
      if (node.nodeType === Node.TEXT_NODE) {
        return node.textContent; // Plain text nodes
      }
      
      if (node.tagName === 'B') {
        return <strong key={index}>{parseHTML(node.innerHTML)}</strong>;
      } 
      
      if (node.tagName === 'A') {
        return (
          <a 
            key={index} 
            className="underline text-blue-800"
            href={node.href}
            target="_blank" 
            rel="noopener noreferrer"
          >
            {parseHTML(node.innerHTML)}
          </a>
        );
      } 
      
      if (node.tagName === 'BR') {
        return <br key={index}/>;
      } 
        
      return null;
    });

    return elements;
  };

  return (
    <div className="w-screen min-h-screen h-full flex flex-col mt-20 z-50 bg-white text-black">
      <button 
        className="bg-red-200 px-2 py-1 my-2 mx-auto rounded-md hover:bg-red-100 duration-300 ease-in-out"
        onClick={() => router.back()}
      >
        Back to Recipes
      </button>

      <h1 className="font-semibold m-auto text-center">{recipe.title}</h1>

      <div className="flex">
        <p className="m-auto md:ml-auto md:mr-2">{"Cooking Time: " + recipe.readyInMinutes + " Minutes"}</p>
        <p className="m-auto md:mr-auto md:ml-2">{"Yields: " + recipe.servings + " Servings"}</p>
      </div>

      <img 
        className="my-4 mx-auto rounded-md"
        src={recipe.image} 
        alt="Hi"
      />

      <p className="p-4 md:w-4/6 md:m-auto">
        {parseHTML(recipe.summary)}
      </p>

      <div className="p-4 md:w-4/6 md:m-auto">
        <h2 className="font-semibold">Ingredients</h2>

        {recipe.nutrition.ingredients.map((ingredient, idx) => {
          return (
            <div className="capitalize" key={idx}>
              {ingredient.name + " - " + ingredient.amount + " " + ingredient.unit}
            </div>
          )})
        }

      </div>

      <div className="p-4 md:w-4/6 md:m-auto">
        <h2 className="font-semibold">Instructions</h2>

        {recipe.analyzedInstructions.map((instructions, idx) => {
            return (
              <div key={idx}>
                <p>{instructions.name}</p>

                {instructions.steps.map((instruction, idx) => {
                  return (
                    <div 
                      key={idx}
                      className="my-1 border-b p-1 border-slate-500"
                    >
                      {instruction.number + ". " + instruction.step}
                    </div>
                  )
                })}
              </div>
            )
          })
        }

      </div>
    </div>
  )
}

export default Recipe;