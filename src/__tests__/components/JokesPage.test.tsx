import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { jokesReducer } from '../../redux/ducks/jokes';
import JokesPage from '../../pages/JokesPage';

test('renders JokesPage correctly', () => {
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
