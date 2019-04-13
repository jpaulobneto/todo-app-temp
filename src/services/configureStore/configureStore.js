import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from '../../rootReducer';

export const configureStore = () => {
  const store = createStore(rootReducer, composeWithDevTools());

  return store;
};
