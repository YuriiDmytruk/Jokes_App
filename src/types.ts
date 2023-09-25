export type Joke = {
  joke: string;
  category: string;
  id: number;
}

export type JokesState = {
  jokes: Joke[],
};

export type JokesActionAdd = {
  type: string,
  jokes?: Joke[],
};

export type JokeDelete = {
  type: string,
  id: number,
}

export type JokesActionFetch = {
  type: string,
  props: {
      jokesLastID: number,
      jokesAmount: number,
    }
};