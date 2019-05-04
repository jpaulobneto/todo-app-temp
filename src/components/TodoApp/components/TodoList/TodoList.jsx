import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from './components/Todo/Todo';

export const TodoList = ({ todos, onTodoClick }) => (
  <ul className="todo-list">
    {todos.map(todo => (
      <Todo
        key={todo.id}
        id={todo.id}
        text={todo.text}
        completed={todo.completed}
        onClick={onTodoClick}
      />
    ))}
  </ul>
);

TodoList.defaultProps = {
  onTodoClick: Todo.defaultProps.onClick,
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape(Todo.propTypes)).isRequired,
  onTodoClick: Todo.propTypes.onClick,
};
