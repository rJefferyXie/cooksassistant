// React + Next
import ExportedImage from 'next-image-export-optimizer';

// Interfaces
import Recipe from "@/interfaces/recipe";

interface RecipePreviewProps {
  recipe: Recipe,
  navigate: Function
}

const RecipePreview = (props: React.PropsWithChildren<RecipePreviewProps>) => {
  const { recipe, navigate } = props;

  return (
    <div 
      className="w-64 h-64 cursor-pointer relative shadow-sm shadow-black rounded-md m-3 hover:brightness-110 hover:scale-105 duration-300" 
      onClick={() => navigate(recipe.spoonacularSourceUrl)}
    >
      <ExportedImage 
        fill
        style={{ objectFit: "cover" }}      
        src={recipe.image}
        alt={`An image of ${recipe.title}`}
        className="rounded-md"
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