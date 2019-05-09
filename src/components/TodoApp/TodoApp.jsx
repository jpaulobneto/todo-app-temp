import React from 'react';
import { AddTodo } from '../../containers/AddTodo';
import { VisibleTodoList } from '../../containers/VisibleTodoList';
import { Footer } from './components/Footer/Footer';

export const TodoApp = ({ match }) => (
  <div className="todo-app">
    <h1>TodoApp</h1>
    <AddTodo />
    <VisibleTodoList filter={match.params.filter || 'all'} />
    <Footer />
  </div>
);
