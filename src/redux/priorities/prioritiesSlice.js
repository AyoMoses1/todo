/*eslint-disable*/
import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  priorities: [],
};

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const fetchPriorities = createAsyncThunk(
  "categories/fetchPriorities",
  async () => {
    const response = await axios.get(`${BASE_URL}priorities`);
    return response.data;
  }
);

const prioritiesSlice = createSlice({
  name: "priorities",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPriorities.fulfilled, (state, action) => {
      const newState = { ...state };
      newState.priorities = action.payload;
      return newState;
    });
  },
});

export default prioritiesSlice.reducer;
