import { combineReducers } from 'redux';
import todos, * as fromTodos from './reducers/todosReducer';

export const rootReducer = combineReducers({
  todos,
});

export const getVisibleTodos = (state, filter) => fromTodos.getVisibleTodos(state.todos, filter);
