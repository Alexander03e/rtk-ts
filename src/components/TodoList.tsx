import { TodoItem } from "./TodoItem"
import { ITodo } from "src/types/data"

interface ITodoListProps {
  items: ITodo[];
}

export const TodoList: React.FC<ITodoListProps> = (props) => {
  const { items } = props

  return <div>
    {
      items.map(item => 
        <TodoItem 
          key={item.id} 
          {...item}
          
          />
        )
    }
  </div>
}