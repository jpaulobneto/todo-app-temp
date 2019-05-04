import { combineReducers } from 'redux';
import { todos } from './reducers/todosReducer';

export const rootReducer = combineReducers({
  todos,
});
