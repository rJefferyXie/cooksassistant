// Types
import { SEARCH } from "../types";

const setQuery = (query: string) => {
  return {
    type: SEARCH.SET_QUERY,
    payload: query
  }
}

const setDiets = (diets: string[]) => {
  return {
    type: SEARCH.SET_DIETS,
    payload: diets
  }
}

const setTypes = (types: string[]) => {
  return {
    type: SEARCH.SET_TYPES,
    payload: types
  }
}

const setCuisines = (cuisines: string[]) => {
  return {
    type: SEARCH.SET_CUISINES,
    payload: cuisines
  }
}

const setIntolerances = (intolerances: string[]) => {
  return {
    type: SEARCH.SET_INTOLERANCES,
    payload: intolerances
  }
}

const SearchActions = {
  setQuery,
  setDiets,
  setTypes,
  setCuisines,
  setIntolerances
}

export default SearchActions;