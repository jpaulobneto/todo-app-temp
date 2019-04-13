import { combineReducers } from 'redux';
import { todos } from './reducers/todosReducer';
import { visibilityFilter } from './reducers/visibilityFilterReducer';

export const rootReducer = combineReducers({
  todos,
  visibilityFilter,
});
