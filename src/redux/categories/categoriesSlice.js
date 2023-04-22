/*eslint-disable*/ 
import axios from 'axios';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
};

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const fetchCategories = createAsyncThunk("categories/fetchCategories", async () => {
  const response = await axios.get(`${BASE_URL}categories`);
  return response.data;
});

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      const newState = { ...state };
      newState.categories = action.payload;
      return newState;
    });
  },
});

export default categoriesSlice.reducer;
