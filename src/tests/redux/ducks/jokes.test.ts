import { runSaga } from 'redux-saga';
import {
    deleteJoke,
    setJokes,
    addJokes,
    fetchJokes,
    DELETE_JOKE,
    SET_JOKES,
    ADD_JOKES,
    FETCH_JOKES,
    jokesReducer,
    fetchJokesWorker
} from '../../../redux/ducks/jokes';

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

jest.mock('../../../api', () => ({
  fetchJokes: jest.fn(),
}));

describe('fetchJokesWorker', () => {

    beforeEach(() => {
    jest.clearAllMocks();
    });
    
  it('should fetch jokes and dispatch addJokes action', async () => {
    const jokesLastID = 0;
    const jokesAmount = 5;
      const mockJokes = [...jokes];

      const apiMock = require('../../../api').fetchJokes;
      
      apiMock.mockResolvedValue(mockJokes);
      
      const dispatch = jest.fn();
      
    await runSaga(
      {
        dispatch,
      },
      fetchJokesWorker,
      { type: FETCH_JOKES, props: { jokesLastID, jokesAmount } }
      ).toPromise();
      
    expect(apiMock).toHaveBeenCalledWith(jokesLastID, jokesAmount);
    expect(dispatch).toHaveBeenCalledWith(addJokes(mockJokes));
  });
});
