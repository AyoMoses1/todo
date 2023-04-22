/*eslint-disable*/
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  todos: [],
  selectedTodo: {},
};

const BASE_URL = "http://localhost:8080/api/v1";

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const response = await axios.get(`${BASE_URL}/todos`, {
    headers: { Authorization: `Bearer ${localStorage.jwtauth}` },
  });
  console.log(response.data, "rrr");
  return response.data.todos;
});

export const deleteTodo = createAsyncThunk("books/deleteTodo", async (id) => {
  console.log(id, "payload")
  await axios.delete(`${BASE_URL}/todos/${id}`, {
    headers: { Authorization: `Bearer ${localStorage.jwtauth}` },
  });
  return id;
});

export const updateTodo = createAsyncThunk(
  "books/updateTodo",
  async (payload) => {
    const response = await axios.put(
      `${BASE_URL}/todos/${payload.id}`,
      payload.data,
      {
        headers: { Authorization: `Bearer ${localStorage.jwtauth}` },
      }
    );
    if (response.status === 200) {
    }
    return response.data;
  }
);

export const addTodo = createAsyncThunk("books/addTodo", async (state) => {
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
  return response;
});

const bookSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      const newState = { ...state };
      console.log(action.payload, "action");
      newState.todos = action.payload;
      return newState;
    });
    builder.addCase(addTodo.fulfilled, (state, action) => {
      state.books.push(action.payload);
    });
    builder.addCase(updateTodo.fulfilled, (state, action) => {
      const newState = { ...state };
      const updatedBooks = state.books.map((book) => {
        return book.id === action.payload.id
          ? { ...book, [action.payload.name]: action.target.value }
          : book;
      });
      newState.books = updatedBooks;
      
      return newState;
    });
    builder.addCase(deleteTodo.fulfilled, (state, action) => {
      const newState = {...state}
      newState.books = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
    });
  },
});

export default bookSlice.reducer;
