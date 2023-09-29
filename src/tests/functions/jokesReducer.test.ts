import { jokesReducer, ADD_JOKES, SET_JOKES, DELETE_JOKE } from '../../redux/ducks/jokes';

const jokes = [
    { joke: 'Joke1', id: 0, category: 'funny' },
    { joke: 'Joke2', id: 1, category: 'funny' },
    { joke: 'Joke3', id: 2, category: 'funny' }
]

describe('jokesReducer', () => {
  it('should handle ADD_JOKES action', () => {
    const initialState = { jokes: jokes };
    const action = { type: ADD_JOKES, jokes: [jokes[0], jokes[1]] };
    const newState = jokesReducer(initialState, action);
    expect(newState.jokes).toHaveLength(5);
  });

  it('should handle SET_JOKES action', () => {
    const initialState = { jokes: jokes };
    const action = { type: SET_JOKES, jokes: [jokes[1]] };
    const newState = jokesReducer(initialState, action);
    expect(newState.jokes).toHaveLength(1);
  });

  it('should handle DELETE_JOKE action', () => {
    const initialState = { jokes: jokes };
    const action = { type: DELETE_JOKE, id: 1 };
    const newState = jokesReducer(initialState, action);
    expect(newState.jokes).toHaveLength(2);
  });

  it('should return the default state for an unknown action', () => {
    const initialState = { jokes: jokes };
    const action = { type: 'UNKNOWN_ACTION' };
    const newState = jokesReducer(initialState, action);
    expect(newState).toEqual(initialState);
  });
});