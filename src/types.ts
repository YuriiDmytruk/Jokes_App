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

export type JokesControlProps = {
  jokesLength: number;
  all: string;
  categories: string[];
  jokesLastID: number;
  setPage: (page: number) => void;
  setFilter: (filter: string) => void;
};

export type JokesPaginationProps = {
  setPage: (page: number) => void;
  jokesLength: number;
  JOKES_ON_PAGE: number;
  page: number;
};
