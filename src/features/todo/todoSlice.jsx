import { createSlice, createReducer, nanoid } from "@reduxjs/toolkit";

// const initialState = [{ name: "sirikorn" }, { name: "artorn" }];

const todoSlice = createSlice({
  name: "todos",
  //   initialState: { name: "sirikorn" },
  initialState: {
    todos: [
      { id: "1", name: "sirikorn" },
      { id: "2", name: "artorn" },
    ],
  },
  //   initialState: [{ name: "sirikorn" }, { name: "artorn" }],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        name: action.payload,
      };
      state.todos.push(newTodo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
