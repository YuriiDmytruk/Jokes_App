import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { render, fireEvent, screen, act } from '@testing-library/react';
import { Provider } from 'react-redux';

import JokesPage from '../../pages/JokesPage';

import { jokesReducer } from '../../redux/ducks/jokes';

import { prettyDOM } from '@testing-library/dom';

const jokes = [
  { id: 1, category: 'Programming', joke: 'Joke 1' },
  { id: 2, category: 'Programming', joke: 'Joke 2' },
  { id: 3, category: 'General', joke: 'Joke 3' },
];

test('should render JokesPage component and match snapshot', async () => {
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

test('should filter jokes correctly when filter is "ALL"', async () => {
  // Mark the test function as async
  const jokes = [
    { id: 1, category: 'Programming', joke: 'Joke 1' },
    { id: 2, category: 'Funny', joke: 'Joke 2' },
  ];

  const store = createStore(jokesReducer, { jokes: jokes });

  const { container } = render(
    <Provider store={store}>
      <MemoryRouter>
        <JokesPage />
      </MemoryRouter>
    </Provider>
  );

  // Wrap the initial click in act
  await act(() => {
    const DropdownButton = screen.getByTestId('DropdownButton');
    const buttonInsideDropdown = DropdownButton.querySelector('button');
    if (buttonInsideDropdown) {
      fireEvent.click(buttonInsideDropdown);
    }
  });

  // Wrap the state-updating code for filter selection in act
  await act(() => {
    const DropdownButtonOptionPrograming = screen.getByTestId('Programming');
    fireEvent.click(DropdownButtonOptionPrograming);
  });

  // Wrap any subsequent actions that may cause state updates in act as well

  expect(screen.queryByText('Joke 2...')).toBeNull();
});
