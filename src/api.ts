import { Joke } from './types'

const URL = 'https://api.api-ninjas.com/v1/dadjokes?limit=';
const KEY = 'FZ/AKic+o4S4M8w6uUkbDA==m9YD4yHpLhWnTHuj';

type JokeData = {
  joke: string;
};

export const fetchJokes = async (
  jokesLastID: number,
  jokesAmount: number
): Promise<Joke[]> => {
  try {
    const response = await fetch(URL + jokesAmount, {
      method: 'GET',
      headers: {
        'X-Api-Key': KEY,
      },
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data: JokeData[] = await response.json() as JokeData[];
    const jokes: Joke[] = data.map((dataJoke, index) => ({
      joke: dataJoke.joke,
      id: jokesLastID + index,
      category: getRandomCategory(),
    }));
    return jokes;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

const categories = ['Programming', 'Dad Joke', 'Animals', 'Car Joke'];
export const getRandomCategory = (): string =>
  categories[Math.floor(Math.random() * categories.length)];