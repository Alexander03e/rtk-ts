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
      console.log(action)
      console.log(state)

      state.items.push({
        id: Date.now(),
        title: action.payload,
        complete: false,
      })
    },
    removeTodo(state, action) {

    },
    toggleTodo(state, action: PayloadAction<number>) {
      console.log(state.items)
      state.items.map(todo => {
        if (todo.id == action.payload) {
          todo.complete = !todo.complete
          console.log(todo.title)
          return todo
        }
      }
      )
    // if (toggledTodo) {
    //   toggledTodo.complete = !toggledTodo.complete
    // }
    }
  }
})

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer