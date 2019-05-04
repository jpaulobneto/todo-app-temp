import React from 'react';
import { AddTodo } from '../../containers/AddTodo/AddTodo';
import { VisibleTodoList } from '../../containers/VisibleTodoList/VisibleTodoList';
import { Footer } from '../../containers/Footer';

export const TodoApp = ({ match }) => (
  <div className="todo-app">
    <h1>TodoApp</h1>
    <AddTodo />
    <VisibleTodoList filter={match.params.filter || 'all'} />
    <Footer />
  </div>
);
