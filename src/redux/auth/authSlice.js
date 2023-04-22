/*eslint-disable*/ 
import axios from 'axios';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  user_details: [],
  error: {

  }
};

const BASE_URL = "http://localhost:8080/api/v1";

export const registerUser = createAsyncThunk("auth/registerUser", async (payload) => {
  const response = await axios.post(`${BASE_URL}/register`, payload);
  return response.status;
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state, action) => {
      const newState = { ...state };
      newState.user_details = action.payload.data;
      return newState;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      const newState = { ...state };
      newState.error = action.payload.data;
      return newState;
    });
  },
});

export default authSlice.reducer;
