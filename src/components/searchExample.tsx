// React + Next
import ExportedImage from "next-image-export-optimizer";

interface SearchExampleProps {
  image: string,
  search: Function
}

const SearchExample = (props: React.PropsWithChildren<SearchExampleProps>) => {
  const { image, search } = props;

  return (
    <button 
      className="m-auto w-48 h-48 relative rounded-md hover:scale-105 hover:brightness-110 duration-300"
      onClick={() => search()}
    >
      <ExportedImage 
        className="m-auto rounded-md w-64 h-64 cursor-pointer relative shadow-sm shadow-black"
        src={image}
        alt="An image of an asian-inspired chicken recipe."
        style={{ objectFit: "cover" }}   
        fill   
      />

      <div className="text-slate-900 py-1 rounded-b-md w-full flex bg-zinc-700 bottom-0 absolute">
        <p className="text-white text-center capitalize truncate w-5/6 m-auto">
          Chicken Recipes
        </p>
      </div>                  
    </button>
  )
}

export default SearchExample;