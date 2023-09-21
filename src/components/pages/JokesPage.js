import React, { useState } from 'react';

import JokesList from '../JokesList';
import JokesControl from '../JokesCotrol';

import { fetchJokes } from '../../api';

const ALL = 'ALL';

export default function JokesPage() {
  const [jokes, setJokes] = useState([]);
  const [filter, setFilter] = useState(ALL);

  const filterJokes = () =>
    filter === ALL ? jokes : jokes.filter((e) => e.category === filter);

  const getUniqueCategoris = () => [...new Set(jokes.map((e) => e.category))];

  return (
    <>
      <JokesControl
        fetchJokes={fetchJokes}
        setJokes={setJokes}
        jokes={jokes}
        setFilter={setFilter}
        categories={getUniqueCategoris()}
        all={ALL}
      />
      <JokesList jokes={filterJokes()} />
    </>
  );
}
