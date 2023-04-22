/*eslint-disable*/ 
import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categories/categoriesSlice';
import todosReducer from './todos/todosSlice';
import prioritiesReducer from './priorities/prioritiesSlice';

const store = configureStore({
  reducer: {
    categoriesReducer,
    todosReducer,
    prioritiesReducer
  },
});

export default store;
