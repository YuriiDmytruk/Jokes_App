import { Joke, JokesState, JokesActionFetch, JokesActionAdd, JokeDelete } from '../../types'
import { put, takeEvery, call } from 'redux-saga/effects';

import { fetchJokes as fetchJokesFromApi } from '../../api';

const ADD_JOKES = 'ADD_JOKES';
const FETCH_JOKES = 'FETCH_JOKES';
const SET_JOKES = 'SET_JOKES';
const DELETE_JOKE = 'DELETE_JOKE'

export const JOKES = 'JOKES'

const defaultState: JokesState = {
  jokes: JSON.parse(localStorage.getItem(JOKES))
};

export const jokesReducer = (
  state: JokesState = defaultState,
  action: any
): JokesState => {
  switch (action.type) {
    case ADD_JOKES:
      return { ...state, jokes: state.jokes.concat(action.jokes || []) };
    case SET_JOKES:
      return { ...state, jokes: action.jokes };
    case DELETE_JOKE:
      return { ...state, jokes: state.jokes.filter(joke => joke.id !== action.id) };
    default:
      return state;
  }
};

export const deleteJoke = (id: number): JokeDelete => {
  return {type: DELETE_JOKE, id: id}
}

export const setJokes = (jokes: Joke[]): JokesActionAdd => {
  return { type: SET_JOKES, jokes: jokes };
}

export const addJokes = (jokes: Joke[]): JokesActionAdd => {
  return { type: ADD_JOKES, jokes: jokes };
}

export const fetchJokes = (
  jokesLastID: number,
  jokesAmount: number
): JokesActionFetch => {
  return {
    type: FETCH_JOKES,
    props: {
      jokesLastID: jokesLastID,
      jokesAmount: jokesAmount,
    }
  };
}

function* fetchJokesWorker(action: JokesActionFetch) {
  const data = yield call(
    fetchJokesFromApi,
    action.props.jokesLastID,
    action.props.jokesAmount
  );
  yield put(addJokes(data));
}

export function* jokesWatcher() {
  yield takeEvery(FETCH_JOKES, fetchJokesWorker);
}