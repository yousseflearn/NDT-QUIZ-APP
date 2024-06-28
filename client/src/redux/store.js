import { combineReducers, configureStore } from '@reduxjs/toolkit';
//call reducer
import questionReducer from './questionReducer.js';
import resultReducer from './resultReducer.js';
const rootReducer = combineReducers({
  questions: questionReducer,
  result: resultReducer,
});
//create store with reducer
export default configureStore({ reducer: rootReducer });
