import { ADD_TODO, TOGGLE_TODO } from '../actions/actionTypes';

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.payload.id,
          text: action.payload.text,
          completed: false,
        },
      ];
    case TOGGLE_TODO:
      return state.map((todoState) => {
        if (todoState.id !== action.payload.id) return todoState;

        return {
          ...todoState,
          completed: !todoState.completed,
        };
      });
    default:
      return state;
  }
};

export default todos;

export const getVisibleTodos = (state, filter) => {
  switch (filter) {
    case 'all':
      return state;
    case 'completed':
      return state.filter(todo => todo.completed);
    case 'active':
      return state.filter(todo => !todo.completed);
    default:
      throw new Error(`Unknown filter ${filter}`);
  }
};
