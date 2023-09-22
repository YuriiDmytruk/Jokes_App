export const ADD_JOKES = 'ADD_JOKES';
export const FETCH_JOKES = 'FETCH_JOKES';

const defaultState = {
  jokes: [],
};

export const jokesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_JOKES:
      return { ...state, jokes: state.jokes.concat(action.jokes) };
    default:
      return state;
  }
};

export function addJokes(props) {
  return { type: ADD_JOKES, jokes: props };
}

export function fetchJokes(jokesLength, jokesAmount) {
  return {
    type: FETCH_JOKES,
    jokesLength: jokesLength,
    jokesAmount: jokesAmount,
  };
}
