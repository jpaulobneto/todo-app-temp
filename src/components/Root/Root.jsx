import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { TodoApp } from '../TodoApp/TodoApp';
import { PageNotFound } from '../PageNotFound/PageNotFound';

export const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/:filter?" component={TodoApp} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  </Provider>
);
