import { v4 } from 'uuid';
import { SET_VISIBILITY_FILTER, ADD_TODO, TOGGLE_TODO } from './actionTypes';

export const addTodo = text => ({
  type: ADD_TODO,
  payload: { id: v4(), text },
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: { id },
});

export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  payload: { filter },
});
