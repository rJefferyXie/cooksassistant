// React + Next
import ExportedImage from "next-image-export-optimizer";

// Redux
import { useDispatch } from "react-redux";
import SearchActions from "@/store/actions/searchActions";

interface SearchExampleProps {
  image: string,
  label: string,
  search: Function,
  query: string,
  diets?: string[],
  types?: string[],
  cuisines?: string[],
  intolerances?: string[]
}

const SearchExample = (props: React.PropsWithChildren<SearchExampleProps>) => {
  const { image, label, search, query, diets, types, cuisines, intolerances } = props;

  // Redux
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(SearchActions.setQuery(query));
    dispatch(SearchActions.setDiets(diets || []));
    dispatch(SearchActions.setTypes(types || []));
    dispatch(SearchActions.setCuisines(cuisines || []));
    dispatch(SearchActions.setIntolerances(intolerances || []));

    const params = {
      query: query,
      diets: diets || [],
      types: types || [],
      cuisines: cuisines || [],
      intolerances: intolerances || []
    }

    search(params);
  }

  return (
    <button 
      className="m-3 w-32 h-32 md:w-64 md:h-64 relative rounded-md hover:scale-105 hover:brightness-110 duration-300"
      onClick={handleClick}
    >
      <ExportedImage 
        className="m-auto rounded-md w-64 h-64 cursor-pointer relative shadow-sm shadow-black"
        src={image}
        alt="An image of an asian-inspired chicken recipe."
        style={{ objectFit: "cover" }}   
        fill   
      />

      <div className="text-slate-900 py-1 rounded-b-md w-full flex bg-zinc-700 bottom-0 absolute">
        <p className="text-white text-center capitalize truncate w-full m-auto px-1">
          {label}
        </p>
      </div>                  
    </button>
  )
}

export default SearchExample;