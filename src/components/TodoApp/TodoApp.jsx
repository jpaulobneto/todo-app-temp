import React from 'react';
import { AddTodo } from '../../containers/AddTodo/AddTodo';
import { TodoList } from '../../containers/TodoList/TodoList';
import { Footer } from '../../containers/Footer';

export const TodoApp = () => (
  <div className="todo-app">
    <h1>TodoApp</h1>
    <AddTodo />
    <TodoList />
    <Footer />
  </div>
);
