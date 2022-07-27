import React from 'react';
import img from './img/img.png';

import './scss/App.scss';

import TodoFooter from './components/TodoFooter/TodoFooter';
import TodoInput from './components/TodoInput/TodoInput';
import TodoList from './components/TodoList/TodoList';

import { useAppSelector, useAppDispatch } from './hook';
import { showAll, showActive, showCompleted, clearCompleted } from './app/reducers/todoReducer';

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const { todos, ongoingList } = useAppSelector((state) => state.todos);

  const activeItems = todos.filter((todo) => todo.completed === false);

  return (
    <>
      <div>
        <img className="profile-logo" src={img} alt="logo" />
      </div>
      <header className="header__title">Yaputya todos</header>
      <div className="content-wrapper">
        <TodoInput />
        <TodoList todos={ongoingList} />
        {todos.length !== 0 && (
          <TodoFooter
            itemsCount={activeItems.length}
            showAll={() => {
              dispatch(showAll());
            }}
            showActive={() => {
              dispatch(showActive());
            }}
            showCompleted={() => {
              dispatch(showCompleted());
            }}
            clearCompleted={() => {
              dispatch(clearCompleted());
            }}
          />
        )}
      </div>
    </>
  );
};

export default App;
