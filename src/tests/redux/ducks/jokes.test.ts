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
  it('deleteJoke should create action with type DELETE_JOKE', () => {
    const action = deleteJoke();
    expect(action.type).toBe(DELETE_JOKE);
  });

  it('deleteJoke should create action with id = -1 if params is empty', () => {
    const action = deleteJoke();
    expect(action.id).toBe(-1);
  });

  it('deleteJoke should create action with id = id if params is not empty', () => {
    const action = deleteJoke(1);
    expect(action.id).toBe(1);
  });

  it('setJokes should create action with type SET_JOKES', () => {
    const action = setJokes();
    expect(action.type).toBe(SET_JOKES);
  });

  it('setJokes should create action with jokes = [] if params is empty', () => {
    const action = setJokes();
    expect(action.jokes).toStrictEqual([]);
  });

  it('setJokes should create action with jokes = jokes if params is not empty', () => {
    const action = setJokes(jokes);
    expect(action.jokes).toBe(jokes);
  });

  it('addJokes should create action with type ADD_JOKES', () => {
    const action = addJokes();
    expect(action.type).toBe(ADD_JOKES);
  });

  it('addJokes should create jokes = [] if params is empty', () => {
    const action = addJokes();
    expect(action.jokes).toStrictEqual([]);
  });

  it('addJokes should create jokes = jokes if params is empty not empty', () => {
    const action = addJokes(jokes);
    expect(action.jokes).toBe(jokes);
  });

  it('fetchJokes should create action with type FETCH_JOKES', () => {
    const action = fetchJokes();
    expect(action.type).toBe(FETCH_JOKES);
  });

  it('fetchJokes should create action with jokesLastID = 0 if params is empty', () => {
    const action = fetchJokes();
    expect(action.props.jokesLastID).toBe(0);
  });

  it('fetchJokes should create action with jokesAmount = 1 if params is empty', () => {
    const action = fetchJokes();
    expect(action.props.jokesAmount).toBe(1);
  });

  it('fetchJokes should create action with jokesLastID = jokesLastID if params is not empty', () => {
    const action = fetchJokes(2, 0);
    expect(action.props.jokesLastID).toBe(2);
  });

  it('fetchJokes should create action with jokesAmount = jokesAmount if params is not empty', () => {
    const action = fetchJokes(0, 2);
    expect(action.props.jokesAmount).toBe(2);
  });
});


describe('jokesReducer', () => {
  it('should handle ADD_JOKES action if array is not empty', () => {
    const initialState = { jokes: jokes };
    const action = { type: ADD_JOKES, jokes: [jokes[0], jokes[1]] };
    const newState = jokesReducer(initialState, action);
    expect(newState.jokes).toHaveLength(5);
  });

  it('should handle ADD_JOKES action if array is empty', () => {
    const initialState = { jokes: jokes };
    const action = { type: ADD_JOKES, jokes: [] };
    const newState = jokesReducer(initialState, action);
    expect(newState.jokes).toHaveLength(3);
  });

  it('should handle SET_JOKES action is not empty', () => {
    const initialState = { jokes: jokes };
    const action = { type: SET_JOKES, jokes: [jokes[1]] };
    const newState = jokesReducer(initialState, action);
    expect(newState.jokes).toHaveLength(1);
  });

  it('should handle SET_JOKES action is empty', () => {
    const initialState = { jokes: jokes };
    const action = { type: SET_JOKES, jokes: [] };
    const newState = jokesReducer(initialState, action);
    expect(newState.jokes).toHaveLength(0);
  });

  it('should handle DELETE_JOKE action if id is in state', () => {
    const initialState = { jokes: jokes };
    const action = { type: DELETE_JOKE, id: 1 };
    const newState = jokesReducer(initialState, action);
    expect(newState.jokes).toHaveLength(2);
  });

  it('should handle DELETE_JOKE action if id is not in state', () => {
    const initialState = { jokes: jokes };
    const action = { type: DELETE_JOKE, id: -1 };
    const newState = jokesReducer(initialState, action);
    expect(newState.jokes).toHaveLength(3);
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
    
  it('should fetch jokes ', async () => {
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
  });

  it('should dispatch addJokes action ', async () => {
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
      
    expect(dispatch).toHaveBeenCalledWith(addJokes(mockJokes));
  });
});
