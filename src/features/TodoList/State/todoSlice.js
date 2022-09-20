import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  todos: [],
};

const TodoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    getTodos: (state) => {
      state.isLoading = true;
    },
    fetchTodosSuccess: (state, action) => {
      state.isLoading = false;
      state.todos = action.payload;
    },
    updateTodoStatus: (state, action) => {
      state.todos = [
        ...state.todos.map((item) => {
          if (item.id === action.payload) {
            item.completed = !item.completed;
          }
          return item;
        }),
      ];
    },
  },
});

export const { getTodos, fetchTodosSuccess, updateTodoStatus } =
  TodoSlice.actions;

export const getTodosList = (state) => state.todos.todos;
export const getLoadingStatus = (state) => state.todos.isLoading;

export default TodoSlice.reducer;
