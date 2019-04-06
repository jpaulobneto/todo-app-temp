import deepFreeze from 'deep-freeze';
import { todos } from './todosReducer';

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
});
