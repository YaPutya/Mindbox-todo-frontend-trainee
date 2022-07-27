import '../../scss/TodoInput.scss';

import { useAppDispatch } from '../../hook';
import { useState, useLayoutEffect, useRef } from 'react';
import { addTodo } from '../../app/reducers/todoReducer';

const TodoInput: React.FC = () => {
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState('');

  useLayoutEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="root">
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        className="svgg"
        y="0px"
        viewBox="0 0 386.257 386.257">
        <polygon points="0,96.879 193.129,289.379 386.257,96.879 " />
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
      </svg>

      <input
        type="text"
        className="todo-input"
        placeholder="What needs to be done?"
        value={value}
        ref={inputRef}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && value !== '') {
            dispatch(addTodo(value));
            setValue('');
          }
        }}
      />
    </div>
  );
};

export default TodoInput;
