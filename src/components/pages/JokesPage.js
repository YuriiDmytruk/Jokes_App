import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { JokesList, JokesControl } from '../index';

import { fetchJokes } from '../../api';

const ALL = 'ALL';

export default function JokesPage(props) {
  const [filter, setFilter] = useState(ALL);
  const jokes = useSelector((state) => state.jokes);

  const filterJokes = () =>
    filter === ALL ? jokes : jokes.filter((joke) => joke.category === filter);

  const getUniqueCategoris = () => [
    ...new Set(jokes.map((joke) => joke.category)),
  ];

  return (
    <>
      <JokesControl
        fetchJokes={fetchJokes}
        jokesLength={jokes.length}
        setFilter={setFilter}
        categories={getUniqueCategoris()}
        all={ALL}
      />
      <JokesList jokes={filterJokes()} />
    </>
  );
}
