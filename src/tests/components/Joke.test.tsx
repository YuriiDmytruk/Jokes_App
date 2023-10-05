import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { MemoryRouter } from 'react-router-dom';

import Joke from '../../components/Joke';

import { jokesReducer } from '../../redux/ducks/jokes';
import { Joke as JokeType } from '../../types';

test('should render Joke component and match snapshot', () => {
  const store = createStore(jokesReducer, { jokes: [] });

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
