/*eslint-disable*/ 
import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categories/categoriesSlice';
import todosReducer from './todos/todosSlice';
import prioritiesReducer from './priorities/prioritiesSlice';
import authReducer from './auth/authSlice'

const store = configureStore({
  reducer: {
    categoriesReducer,
    todosReducer,
    prioritiesReducer,
    authReducer
  },
});

export default store;
