/*eslint-disable*/
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Authinstance, instance } from "../../configs/axios";
import axios from "axios";

const initialState = {
  todos: [],
};

const BASE_URL = "http://localhost:8080/api/v1";

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
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

export const addTodo = createAsyncThunk('books/addTodo', async (state) => {
  const payload = {
    title: state.title,
    description: state.description,
    category_id: state.category_id.id,
    due_date: state.due_date,
    priority_id: state.priority_id.id,
  };
  const response = await axios.post(`${BASE_URL}/todos`, payload, {
    headers: { Authorization: `Bearer ${localStorage.jwtauth}` },
  });
  console.log(response)
});

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
    builder.addCase(addTodo.fulfilled, (state, action) => {
      state.books.push(action.payload);
    });
    // builder.addCase(removeBook.fulfilled, (state, action) => {
    //   const newState = { ...state };
    //   newState.books = state.books.filter((book) => book.item_id !== action.payload);
    //   return newState;
    // });
  },
});

export default bookSlice.reducer;
