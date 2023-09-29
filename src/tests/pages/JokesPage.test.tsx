import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import JokesPage from '../../pages/JokesPage';

import { jokesReducer } from '../../redux/ducks/jokes';

test('should render JokesPage component and match snapshot', () => {
  const store = createStore(jokesReducer, { jokes: [] });

  const { asFragment } = render(
    <Provider store={store}>
      <MemoryRouter>
        <JokesPage />
      </MemoryRouter>
    </Provider>
  );

  expect(asFragment()).toMatchSnapshot();
});
