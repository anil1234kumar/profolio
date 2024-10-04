import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todoList: [],
  },
  reducers: {
    addTodo: (state, action) => {
      console.log(state, "============== state state");
      console.log(action, "==============action");
      state.todoList.push({
        ...action.payload,
        id: state.todoList.length + 1,
      });
    },

    editTodo: (state, action) => {
      console.log(action.payload, "editTodo editTodo editTodo");
      let { todoList } = state;
      state.todoList = todoList.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    },

    deleteTodo: (state, action) => {
      console.log(action.payload.id, "deleteTodo deleteTodo deleteTodo");
      state.todoList = state.todoList.filter(
        (todos) => todos.id !== action.payload.id
      );
    },
  },
});

export const selectTodoList = (state) => state.todos.todoList;

export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;
