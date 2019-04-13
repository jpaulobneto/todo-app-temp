import deepFreeze from 'deep-freeze';
import { todos } from './todosReducer';
import { TOGGLE_TODO } from '../actions/actionTypes';

describe('todos reducer', () => {
  it('returns the initial state when current state is undefined', () => {
    const currentState = undefined;
    const action = { type: 'SOMETHING' };
    const nextState = [];

    expect(todos(currentState, action)).toEqual(nextState);
  });

  it('returns the current state when action is unknown', () => {
    const currentState = deepFreeze([{ id: 'id-1', text: 'hey', completed: true }]);
    const action = deepFreeze({ type: 'SOMETHING' });
    const nextState = [{ id: 'id-1', text: 'hey', completed: true }];

    expect(todos(currentState, action)).toEqual(nextState);
  });

  describe('handles', () => {
    it('ADD_TODO action', () => {
      const currentState = deepFreeze([{ id: 'id-1', text: 'hey', completed: true }]);
      const action = deepFreeze({ type: 'ADD_TODO', payload: { id: 'id-2', text: 'ho' } });
      const nextState = [
        { id: 'id-1', text: 'hey', completed: true },
        { id: 'id-2', text: 'ho', completed: false },
      ];

      expect(todos(currentState, action)).toEqual(nextState);
    });
  });

  it('returns a state with a completed todo when todo is not completed and action type is TOGGLE_TODO', () => {
    const currentState = deepFreeze([
      { id: 'id-1', text: 'hey', completed: true },
      { id: 'id-2', text: 'ho', completed: false },
    ]);
    const action = ({ type: TOGGLE_TODO, payload: { id: 'id-2' } });
    const nextState = [
      { id: 'id-1', text: 'hey', completed: true },
      { id: 'id-2', text: 'ho', completed: true },
    ];

    expect(todos(currentState, action)).toEqual(nextState);
  });

  it('returns a state with a not completed todo when todo is completed and action type is TOGGLE_TODO', () => {
    const currentState = deepFreeze([
      { id: 'id-1', text: 'hey', completed: true },
      { id: 'id-2', text: 'ho', completed: true },
    ]);
    const action = ({ type: TOGGLE_TODO, payload: { id: 'id-2' } });
    const nextState = [
      { id: 'id-1', text: 'hey', completed: true },
      { id: 'id-2', text: 'ho', completed: false },
    ];

    expect(todos(currentState, action)).toEqual(nextState);
  });
});
