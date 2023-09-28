import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { jokesReducer } from '../../redux/ducks/jokes';
import JokesControl from '../../components/JokesCotrol';
import { JokesControlProps } from '../../types';

test('renders JokesControl correctly', () => {
  const store = createStore(
    jokesReducer, // Provide your actual Redux root reducer
    { jokes: [] } // Initialize with the desired initial state
  );

  const props: JokesControlProps = {
    jokesLength: 0,
    all: 'ALL',
    categories: [],
    jokesLastID: 0,
    setPage: (page: number) => {},
    setFilter: (filter: string) => {},
  };

  const { asFragment } = render(
    <Provider store={store}>
      <MemoryRouter>
        <JokesControl
          jokesLength={props.jokesLength}
          all={props.all}
          categories={props.categories}
          jokesLastID={props.jokesLastID}
          setPage={props.setPage}
          setFilter={props.setFilter}
        />
      </MemoryRouter>
    </Provider>
  );

  expect(asFragment()).toMatchSnapshot();
});
