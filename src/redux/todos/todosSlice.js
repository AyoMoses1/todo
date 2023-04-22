/*eslint-disable*/
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Authinstance, instance } from "../../configs/axios";
import axios from "axios";

const initialState = {
  todos: [],
};

const BASE_URL = "http://localhost:8080/api/v1";

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  console.log(BASE_URL, "iiik");
  const response = await axios.get(`${BASE_URL}/todos`, {
    headers: { Authorization: `Bearer ${localStorage.jwtauth}` },
  });
  const res = response.data;
  return res;
});

// export const removeBook = createAsyncThunk('books/removeBook', async (id) => {
//   await axios.delete(`${BASE_URL}/${id}`);
//   return id;
// });

// export const addBook = createAsyncThunk('books/addBook', async (book) => {
//   await axios.post(BASE_URL, book);
//   return book;
// });

const bookSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      const newState = { ...state };
      newState.todos = action.payload;
      return newState;
    });
    // builder.addCase(addBook.fulfilled, (state, action) => {
    //   state.books.push(action.payload);
    // });
    // builder.addCase(removeBook.fulfilled, (state, action) => {
    //   const newState = { ...state };
    //   newState.books = state.books.filter((book) => book.item_id !== action.payload);
    //   return newState;
    // });
  },
});

export default bookSlice.reducer;
