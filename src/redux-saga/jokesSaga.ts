import { put, takeEvery, call } from 'redux-saga/effects';
import { addJokes, FETCH_JOKES } from './jokesReducer';

import {JokesActionFetch} from '../types'

import { fetchJokes } from '../api';

function* fetchJokesWorker(action: JokesActionFetch) {
  const data = yield call(
    fetchJokes,
    action.props.jokesLength,
    action.props.jokesAmount
  );
  yield put(addJokes(data));
}

export function* jokesWatcher() {
  yield takeEvery(FETCH_JOKES, fetchJokesWorker);
}