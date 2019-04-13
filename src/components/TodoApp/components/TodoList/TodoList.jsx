import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from './components/Todo/Todo';

export const TodoList = ({ todos }) => (
  <ul className="todo-list">
    {todos.map(todo => (
      <Todo key={todo.id} text={todo.text} completed={todo.completed} />
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
