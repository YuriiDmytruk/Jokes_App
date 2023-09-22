import { ADD_JOKES, GET_JOKES } from './types';

const defaultState = {
  jokes: [],
};

export const jokesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_JOKES:
      return { ...state, jokes: state.jokes.concat(action.jokes) };
    case GET_JOKES:
      return { ...state };
    default:
      return state;
  }
};
