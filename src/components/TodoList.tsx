import { TodoItem } from "./TodoItem"
import { ITodo } from "src/types/data"

interface ITodoListProps {
  items: ITodo[];
  toggleTodo: (id: number) => void
  removeTodo: (id: number) => void
}

export const TodoList: React.FC<ITodoListProps> = (props) => {
  const { items, toggleTodo, removeTodo } = props

  return <div>
    {
      items.map(item => 
        <TodoItem 
          key={item.id} 
          // removeTodo={removeTodo}
          // toggleTodo={toggleTodo}
          {...item}
          
          />
        )
    }
  </div>
}