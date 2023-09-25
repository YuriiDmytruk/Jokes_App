import { createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware, { Task } from 'redux-saga';
import { jokesWatcher, jokesReducer } from './ducks/jokes';

import { JokesState } from '../types';

const sagaMiddleware = createSagaMiddleware();

export const store: Store<JokesState> = createStore(
  jokesReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(jokesWatcher as () => IterableIterator<Task>);