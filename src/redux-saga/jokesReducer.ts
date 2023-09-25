import {Joke, JokesState, JokesActionFetch, JokesActionAdd} from '../types'

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

export function addJokes(jokes: Joke[]): JokesActionAdd {
  return { type: ADD_JOKES, jokes: jokes };
}

export function fetchJokes(
  jokesLength: number,
  jokesAmount: number
): JokesActionFetch {
  return {
    type: FETCH_JOKES,
    props: {
      jokesLength: jokesLength,
      jokesAmount: jokesAmount,
    }
  };
}
