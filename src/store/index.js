import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { jokesReducer } from './jokesReducer';

export const store = createStore(jokesReducer, composeWithDevTools());
