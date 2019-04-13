import { ADD_TODO, TOGGLE_TODO } from '../actions/actionTypes';

export const todos = (state = [], action) => {
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
