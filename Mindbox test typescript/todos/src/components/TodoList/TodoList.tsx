import TodoItem from '../TodoItem/TodoItem';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} id={todo.id} text={todo.text} completed={todo.completed} />;
      })}
    </div>
  );
};

export default TodoList;
