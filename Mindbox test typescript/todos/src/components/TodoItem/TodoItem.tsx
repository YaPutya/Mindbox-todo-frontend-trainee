import '../../scss/TodoItem.scss';
import circle from '../../assets/circle.svg';
import check from '../../assets/check.svg';

import { useAppDispatch } from '../../hook';
import { setCompleted } from '../../app/reducers/todoReducer';

interface TodoItemProps {
  id: string;
  text: string;
  completed: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({ text, completed, id }) => {
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="todo-item">
        <img
          src={completed ? check : circle}
          alt=""
          className="todo-item__icon"
          onClick={() => {
            dispatch(setCompleted(id));
          }}
        />
        <span className={completed ? 'todo-item__text completed' : 'todo-item__text'}>{text}</span>
      </div>
    </>
  );
};

export default TodoItem;
