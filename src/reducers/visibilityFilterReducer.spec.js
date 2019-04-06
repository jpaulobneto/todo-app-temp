import { visibilityFilter } from './visibilityFilterReducer';
import { SET_VISIBILITY_FILTER } from '../actions/actionTypes';

describe('visibilityFilter reducer', () => {
  it('returns the initial state when current state is undefined', () => {
    const stateBefore = undefined;
    const action = { type: 'SOMETHING' };
    const stateAfter = 'SHOW_ALL';

    expect(visibilityFilter(stateBefore, action)).toEqual(stateAfter);
  });

  it('returns the current state when action is unknown', () => {
    const stateBefore = 'SHOW_COMPLETED';
    const action = { type: 'SOMETHING' };
    const stateAfter = 'SHOW_COMPLETED';

    expect(visibilityFilter(stateBefore, action)).toEqual(stateAfter);
  });

  describe('handles', () => {
    it('SET_VISIBILITY_FILTER action', () => {
      const stateBefore = 'SHOW_ALL';
      const action = { type: SET_VISIBILITY_FILTER, payload: { filter: 'SHOW_ACTIVE' } };
      const stateAfter = 'SHOW_ACTIVE';

      expect(visibilityFilter(stateBefore, action)).toEqual(stateAfter);
    });
  });
});
