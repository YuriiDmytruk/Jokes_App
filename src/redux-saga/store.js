import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { jokesWatcher } from './jokesSaga';
import { jokesReducer } from './jokesReducer';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  jokesReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(jokesWatcher);
