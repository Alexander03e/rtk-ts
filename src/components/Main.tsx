import styled from 'styled-components'

import { useState, useEffect, useRef } from 'react'
import { TodoList } from './TodoList'
import { addTodo } from 'src/store/todoSlice'
import { ThemeSwitchBtn } from './Header'
import { useAppDispatch, useAppSelector } from 'src/store/hooks'

const Todo: React.FC = () => {
  const [value, setValue] = useState('')
  const dispatch = useAppDispatch()
  const todos = useAppSelector(state => state.todos.items)
  const inputRef = useRef<HTMLInputElement>(null)

  const inputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value)
  }
  
  const handleKeyDown:  React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') 
      dispatch(addTodo(value))
  }

  useEffect(() => {
    if (inputRef.current)
      inputRef.current.focus()
  }, []) // автоматически устанавливает курсор на поле ввода при загрузки страницы

  return (
    <>
      <div>
        {/* <TodoContext.Provider value = {context}> */}
          <input type="text" value={value} ref={inputRef} onKeyDown={handleKeyDown} onChange={inputChange}/>
          <ThemeSwitchBtn onClick={() => dispatch(addTodo(value))}>Добавить</ThemeSwitchBtn>
          <TodoList items={todos}/>
        {/* </TodoContext.Provider> */}
      </div>    
    </>
  )
}

export { Todo }