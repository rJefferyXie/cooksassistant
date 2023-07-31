// Redux
import { useDispatch } from "react-redux";
import recipeActions from "@/store/actions/recipeActions";

// Interfaces
import Recipe from "@/interfaces/recipe";

interface RecipePreviewProps {
  recipe: Recipe,
  navigate: Function
}

const RecipePreview = (props: React.PropsWithChildren<RecipePreviewProps>) => {
  const { recipe, navigate } = props;
  
  // Redux
  const dispatch = useDispatch()

  const viewRecipe = () => {
    dispatch(recipeActions.viewRecipe(recipe));
    navigate(recipe.spoonacularSourceUrl);
  }

  return (
    <div 
      className="w-36 h-36 sm:w-48 sm:h-48 md:w-64 md:h-64 cursor-pointer relative shadow-sm shadow-black rounded-md m-2 hover:brightness-110 hover:scale-105 duration-300" 
      onClick={viewRecipe}
    >
      <img
        src={recipe.image}
        alt={`An image of ${recipe.title}`}
        className="rounded-md object-cover h-full w-full"
      />
      
      <div className="text-slate-900 py-1 rounded-b-md w-full flex bg-zinc-700 bottom-0 absolute">
        <p className="text-white text-center capitalize truncate w-5/6 m-auto">
          {recipe.title}
        </p>
      </div>
    </div>
  )
}

export default RecipePreview;