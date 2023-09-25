import { put, takeEvery, call } from 'redux-saga/effects';
import { addJokes, FETCH_JOKES } from './jokesReducer';
import { fetchJokes } from '../api';

function* fetchJokesWorker(action) {
  const data = yield call(fetchJokes, action.jokesLength, action.jokesAmount);
  yield put(addJokes(data));
}

export function* jokesWatcher() {
  yield takeEvery(FETCH_JOKES, fetchJokesWorker);
}
