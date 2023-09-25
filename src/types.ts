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

export type JokesActionFetch = {
  type: string,
  props: {
      jokesLength: number,
      jokesAmount: number,
    }
};