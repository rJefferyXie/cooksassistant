// Redux
import { combineReducers } from '@reduxjs/toolkit';

// Reducers
import RecipeReducer from './recipeReducer';
import SearchReducer from './searchReducer';

const rootReducer = combineReducers({
  recipe: RecipeReducer,
  search: SearchReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;