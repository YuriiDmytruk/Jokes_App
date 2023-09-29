import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import JokePopUp from '../../components/JokePopUp';

import { jokesReducer } from '../../redux/ducks/jokes';

test('should render JokePopUp component and match snapshot', () => {
  const store = createStore(jokesReducer, { jokes: [] });

  const { asFragment } = render(
    <Provider store={store}>
      <MemoryRouter>
        <JokePopUp />
      </MemoryRouter>
    </Provider>
  );

  expect(asFragment()).toMatchSnapshot();
});
