import { runSaga } from 'redux-saga';
import { fetchJokesWorker, addJokes, FETCH_JOKES } from '../../redux/ducks/jokes';

jest.mock('../../api', () => ({
  fetchJokes: jest.fn(),
}));

describe('fetchJokesWorker', () => {

    beforeEach(() => {
    jest.clearAllMocks();
    });
    
  it('should fetch jokes and dispatch addJokes action', async () => {
    const jokesLastID = 0;
    const jokesAmount = 5;
      const mockJokes = [
          { joke: 'Joke1', id: 0, category: 'funny' },
          { joke: 'Joke2', id: 1, category: 'funny' }
      ];

      const apiMock = require('../../api').fetchJokes;
      
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
