// Redux
import { PayloadAction } from '@reduxjs/toolkit';

// Types
import { SEARCH } from '../types';

const initialState = {
  query: '',
  diets: [],
  types: [],
  cuisines: [],
  intolerances: []
}

const SearchReducer = (state = initialState, action: PayloadAction) => {
  switch (action.type) {
    case SEARCH.SET_QUERY: {
      return {
        ...state,
        query: action.payload,
      }
    }

    case SEARCH.SET_DIETS: {
      return {
        ...state,
        diets: action.payload
      }
    }

    case SEARCH.SET_TYPES: {
      return {
        ...state,
        types: action.payload
      }
    }

    case SEARCH.SET_CUISINES: {
      return {
        ...state,
        cuisines: action.payload
      }
    }

    case SEARCH.SET_INTOLERANCES: {
      return {
        ...state,
        intolerances: action.payload
      }
    }

    default: {
      return state;
    }
  }
}

export default SearchReducer;