import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { JokesList, JokesControl, JokesPagination } from '../index';
import { StyledJokesPage } from '../styled/JokesPage';

import { fetchJokes } from '../../api';

const ALL = 'ALL';
const JOKES_ON_PAGE = 12;

export default function JokesPage(props) {
  const [filter, setFilter] = useState(ALL);
  const [page, setPage] = useState(1);
  const jokes = useSelector((state) => state.jokes);

  const filterJokes = () =>
    filter === ALL ? jokes : jokes.filter((e) => e.category === filter);

  const pageJokes = (filteredJokes) =>
    filteredJokes.slice(
      (page - 1) * (JOKES_ON_PAGE + 1),
      page * JOKES_ON_PAGE + page - 1
    );

  const getUniqueCategoris = () => [...new Set(jokes.map((e) => e.category))];

  return (
    <StyledJokesPage>
      <JokesControl
        fetchJokes={fetchJokes}
        jokesLength={jokes.length}
        setFilter={setFilter}
        categories={getUniqueCategoris()}
        all={ALL}
        setPage={setPage}
      />
      <JokesList jokes={pageJokes(filterJokes())} />
      <JokesPagination
        page={page}
        jokesLength={filterJokes(jokes).length}
        setPage={setPage}
        JOKES_ON_PAGE={JOKES_ON_PAGE}
      />
    </StyledJokesPage>
  );
}
