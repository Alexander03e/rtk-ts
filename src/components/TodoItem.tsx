import { ITodo  } from "types/data"
import { toggleTodo, removeTodo } from "src/store/todoSlice"
import { useAppDispatch } from "src/store/hooks"
interface ITodoItem extends ITodo {
  // removeTodo: (id: number) => void
  // toggleTodo: (id: number) => void
}

export const TodoItem: React.FC<ITodoItem> = (props) => {
  const {id, title, complete} = props;

  const dispatch = useAppDispatch()

  return <div>
    <input type="checkbox" checked={complete} onChange={() => dispatch(toggleTodo(id))}/>
    {title}
    <button 
      onClick={() => dispatch(removeTodo(id))}
      style={{
        border:'none',
        background: 'transparent',
        outline: 'none',
        color: 'red',
      }}
    >X</button>
  </div>
}