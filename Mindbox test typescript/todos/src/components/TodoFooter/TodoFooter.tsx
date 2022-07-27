import '../../scss/TodoFooter.scss';

interface TodoFooterProps {
  itemsCount: number;

  showAll: () => void;
  showActive: () => void;
  showCompleted: () => void;
  clearCompleted: () => void;
}

const TodoFooter: React.FC<TodoFooterProps> = ({
  itemsCount,
  showAll,
  showActive,
  showCompleted,
  clearCompleted,
}) => {
  return (
    <div className="todo-footer">
      <span className="todo-footer__count">{itemsCount} items left</span>
      <div className="todo-footer__buttons">
        <button onClick={showAll}>All</button>
        <button onClick={showActive}>Active</button>
        <button onClick={showCompleted}>Completed</button>
      </div>
      <button onClick={clearCompleted}>Clear completed</button>
    </div>
  );
};

export default TodoFooter;
