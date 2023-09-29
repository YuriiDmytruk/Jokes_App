import fetchMock from 'jest-fetch-mock';

import { fetchJokes, getRandomCategory } from '../api';

fetchMock.enableMocks();

describe('fetchJokes', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('should fetches jokes and returns them correctly', async () => {
    const jokesLastID = 0;
    const jokesAmount = 5;
    const mockJokesData = [
      { joke: 'Joke 1' },
      { joke: 'Joke 2' },
      { joke: 'Joke 3' },
      { joke: 'Joke 4' },
      { joke: 'Joke 5' },
    ];

    fetchMock.mockResponseOnce(JSON.stringify(mockJokesData), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

    const jokes = await fetchJokes(jokesLastID, jokesAmount);

    expect(fetchMock).toHaveBeenCalledWith(
      'https://api.api-ninjas.com/v1/dadjokes?limit=5',
      {
        method: 'GET',
        headers: {
          'X-Api-Key': 'FZ/AKic+o4S4M8w6uUkbDA==m9YD4yHpLhWnTHuj',
        },
      }
    );

    expect(jokes).toEqual([
      { joke: 'Joke 1', id: 0, category: expect.any(String) },
      { joke: 'Joke 2', id: 1, category: expect.any(String) },
      { joke: 'Joke 3', id: 2, category: expect.any(String) },
      { joke: 'Joke 4', id: 3, category: expect.any(String) },
      { joke: 'Joke 5', id: 4, category: expect.any(String) },
    ]);
  });

  it('should handles network errors and return empty array ', async () => {
    fetchMock.mockReject(new Error('Network error'));

    const jokesLastID = 0;
    const jokesAmount = 5;

    const jokes = await fetchJokes(jokesLastID, jokesAmount);

    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(jokes).toEqual([]);
  });

  it('should call only once ', async () => {
    fetchMock.mockReject(new Error('Network error'));
    await fetchJokes(0, 0);
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });
});

describe('getRandomCategory', () => {
  it('should always return string', () => {
    const category = getRandomCategory();
    expect(typeof category).toBe('string');
  });
});
