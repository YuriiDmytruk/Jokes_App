import { Joke, JokesState, JokesActionFetch, JokesActionAdd } from '../../types'
import { put, takeEvery, call } from 'redux-saga/effects';

import { fetchJokes as fetchJokesFromApi } from '../../api';

export const ADD_JOKES = 'ADD_JOKES';
export const FETCH_JOKES = 'FETCH_JOKES';

const defaultState: JokesState = {
  jokes: [],
};

export const jokesReducer = (
  state: JokesState = defaultState,
  action: any
): JokesState => {
  switch (action.type) {
    case ADD_JOKES:
      return { ...state, jokes: state.jokes.concat(action.jokes || []) };
    default:
      return state;
  }
};

export const addJokes = (jokes: Joke[]): JokesActionAdd => {
  return { type: ADD_JOKES, jokes: jokes };
}

export const fetchJokes = (
  jokesLength: number,
  jokesAmount: number
): JokesActionFetch => {
  return {
    type: FETCH_JOKES,
    props: {
      jokesLength: jokesLength,
      jokesAmount: jokesAmount,
    }
  };
}

function* fetchJokesWorker(action: JokesActionFetch) {
  const data = yield call(
    fetchJokesFromApi,
    action.props.jokesLength,
    action.props.jokesAmount
  );
  yield put(addJokes(data));
}

export function* jokesWatcher() {
  yield takeEvery(FETCH_JOKES, fetchJokesWorker);
}