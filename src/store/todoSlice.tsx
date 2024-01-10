import { createSlice } from "@reduxjs/toolkit";
import { ITodo } from "src/types/data"
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./index";

interface TodoState {
  items: ITodo[]
}

const initialState: TodoState = {
 items: []
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      action.payload ?
      state.items.push({
        id: Date.now(),
        title: action.payload,
        complete: false,
      }) : ''
    },
    removeTodo(state, action: PayloadAction<number>) {
      state.items = state.items.filter(todo => todo.id != action.payload ? todo : '')
    },
    toggleTodo(state, action: PayloadAction<number>) {
      state.items.map(todo => {
        if (todo.id == action.payload) {
          todo.complete = !todo.complete
          return 
        }
      }
      )
    }
  }
})

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer