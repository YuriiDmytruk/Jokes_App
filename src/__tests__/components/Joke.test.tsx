import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { jokesReducer } from '../../redux/ducks/jokes';
import { MemoryRouter } from 'react-router-dom';
import Joke from '../../components/Joke';
import { Joke as JokeType } from '../../types';

test('renders Joke correctly', () => {
  const store = createStore(
    jokesReducer, // Provide your actual Redux root reducer
    { jokes: [] } // Initialize with the desired initial state
  );

  const joke: JokeType = {
    joke: 'SomeJoke',
    category: 'category',
    id: 0,
  };

  const { asFragment } = render(
    <Provider store={store}>
      <MemoryRouter>
        <Joke joke={joke} />
      </MemoryRouter>
    </Provider>
  );

  expect(asFragment()).toMatchSnapshot();
});
