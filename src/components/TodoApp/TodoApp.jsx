import React from 'react';
import { AddTodo } from '../../containers/AddTodo/AddTodo';
import { TodoList } from '../../containers/TodoList/TodoList';

export const TodoApp = () => (
  <div className="todo-app">
    <h1>TodoApp</h1>
    <AddTodo
      onAddTodo={(value) => {
        console.log(value);
      }}
    />
    <TodoList />
  </div>
);
