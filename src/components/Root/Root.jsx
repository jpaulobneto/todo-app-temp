import React from 'react';
import { Provider } from 'react-redux';
import { TodoApp } from '../TodoApp/TodoApp';

export const Root = ({ store }) => (
  <Provider store={store}>
    <TodoApp />
  </Provider>
);
