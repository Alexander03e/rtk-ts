import styled from 'styled-components'

import { useState, useEffect, useRef } from 'react'
import { ITodo } from 'types/data'
import { TodoList } from './TodoList'
import { createContext } from 'react'
import { addTodo } from 'src/store/todoSlice'
import { ThemeSwitchBtn } from './Header'
import { useAppDispatch, useAppSelector } from 'src/store/hooks'

const Todo: React.FC = () => {
  const [value, setValue] = useState('')
  // const [todos, setTodos] = useState<ITodo[]>([])
  const dispatch = useAppDispatch()
  const todos = useAppSelector(state=> state.todos.items)
  const inputRef = useRef<HTMLInputElement>(null)

  const inputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value)
  }
  
  const handleKeyDown:  React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') 
      dispatch(addTodo(value))
  }

  // const addTodo = () => {
  //   value ? 
  //   setTodos([...todos, {
  //     id: Date.now(),
  //     title: value,
  //     complete: false
  //   }]) : ' '
  //   setValue('')
  // }

  const removeTodo = (id: number): void => {
    setTodos(todos.filter(item => item.id !== id))
  }

  const toggleTodo = (id: number): void => {
    setTodos(todos.map(item => {
      if (item.id !== id) 
        return item
      return {
        ...item,
        complete: !item.complete
      }
    })
    )
  }

  useEffect(() => {
    if (inputRef.current)
      inputRef.current.focus()
  }, []) // автоматически устанавливает курсор на поле ввода при загрузки страницы

  // const context = {
  //   toggleTodo, 
  //   removeTodo
  // } 

  // const TodoContext = createContext(context)
  

  return (
    <>
      <div>
        {/* <TodoContext.Provider value = {context}> */}
          <input type="text" value={value} ref={inputRef} onKeyDown={handleKeyDown} onChange={inputChange}/>
          <ThemeSwitchBtn onClick={() => dispatch(addTodo(value))}>Добавить</ThemeSwitchBtn>
          <TodoList items={todos} removeTodo={removeTodo} toggleTodo={toggleTodo}/>
        {/* </TodoContext.Provider> */}
      </div>    
    </>
  )
}

export { Todo }