import {
    deleteJoke,
    setJokes,
    addJokes,
    fetchJokes,
    DELETE_JOKE,
    SET_JOKES,
    ADD_JOKES,
    FETCH_JOKES
} from '../../redux/ducks/jokes';

const jokes = [
    { joke: 'Joke1', id: 0, category: 'funny' },
    { joke: 'Joke2', id: 1, category: 'funny' },
    { joke: 'Joke3', id: 2, category: 'funny' }
]

describe('Action Creators', () => {
  it('deleteJoke should create DELETE_JOKE action', () => {
    const action = deleteJoke(1);
    expect(action.type).toBe(DELETE_JOKE);
    expect(action.id).toBe(1);
  });

  it('setJokes should create SET_JOKES action', () => {
    const action = setJokes(jokes);
    expect(action.type).toBe(SET_JOKES);
    expect(action.jokes).toBe(jokes);
  });

  it('addJokes should create ADD_JOKES action', () => {
    const action = addJokes(jokes);
    expect(action.type).toBe(ADD_JOKES);
    expect(action.jokes).toBe(jokes);
  });

  it('fetchJokes should create FETCH_JOKES action', () => {
    const action = fetchJokes(1, 2);
    expect(action.type).toBe(FETCH_JOKES);
      expect(action.props.jokesLastID).toBe(1);
      expect(action.props.jokesAmount).toBe(2);
  });
});