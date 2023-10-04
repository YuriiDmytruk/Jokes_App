import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';

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

describe('Test filter', () => {
  it('should filter jokes when filter is not "ALL"', async () => {
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

    const DropdownButton = screen.getByTestId('DropdownButton');
    const buttonInsideDropdown = DropdownButton.querySelector('button');
    if (buttonInsideDropdown) {
      fireEvent.click(buttonInsideDropdown);
    }

    const DropdownButtonOptionPrograming = screen.getByTestId('Programming');
    fireEvent.click(DropdownButtonOptionPrograming);

    await waitFor(() => {
      expect(screen.queryByText('Joke 2...')).toBeNull();
    });
  });
});

describe('Test pagination', () => {
  it('should not show pagination if jokes count < 13', () => {
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

    expect(screen.queryByTestId('Pagination')).toBeNull();
  });

  it('should show pagination if jokes count > 13', () => {
    const jokes = [
      { id: 1, category: 'any', joke: 'Joke' },
      { id: 2, category: 'any', joke: 'Joke' },
      { id: 3, category: 'any', joke: 'Joke' },
      { id: 4, category: 'any', joke: 'Joke' },
      { id: 5, category: 'any', joke: 'Joke' },
      { id: 6, category: 'any', joke: 'Joke' },
      { id: 7, category: 'any', joke: 'Joke' },
      { id: 8, category: 'any', joke: 'Joke' },
      { id: 9, category: 'any', joke: 'Joke' },
      { id: 10, category: 'any', joke: 'Joke' },
      { id: 11, category: 'any', joke: 'Joke' },
      { id: 12, category: 'any', joke: 'Joke' },
      { id: 13, category: 'any', joke: 'Joke' },
      { id: 14, category: 'any', joke: 'Joke' },
    ];

    const store = createStore(jokesReducer, { jokes: jokes });

    const { container } = render(
      <Provider store={store}>
        <MemoryRouter>
          <JokesPage />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('Pagination')).toBeInTheDocument();
  });
});

describe('Test input', () => {
  it('should be disabled button Add when input = "0"', async () => {
    const store = createStore(jokesReducer, { jokes: [] });

    const { container } = render(
      <Provider store={store}>
        <MemoryRouter>
          <JokesPage />
        </MemoryRouter>
      </Provider>
    );

    const input = screen.getByTestId('AmountInput');
    const button = screen.getByTestId('ButtonAdd');

    userEvent.type(input, '0');

    expect(button).toHaveAttribute('disabled');
  });

  it('should be disabled button Add when input = "13"', async () => {
    const store = createStore(jokesReducer, { jokes: [] });

    const { container } = render(
      <Provider store={store}>
        <MemoryRouter>
          <JokesPage />
        </MemoryRouter>
      </Provider>
    );

    const input = screen.getByTestId('AmountInput');
    const button = screen.getByTestId('ButtonAdd');

    userEvent.type(input, '13');

    expect(button).toHaveAttribute('disabled');
  });

  it('should be disabled button Add when input = "abc"', async () => {
    const store = createStore(jokesReducer, { jokes: [] });

    const { container } = render(
      <Provider store={store}>
        <MemoryRouter>
          <JokesPage />
        </MemoryRouter>
      </Provider>
    );

    const input = screen.getByTestId('AmountInput');
    const button = screen.getByTestId('ButtonAdd');

    userEvent.type(input, 'abc');

    expect(button).toHaveAttribute('disabled');
  });

  it('should not be disabled button Add when input = "6"', async () => {
    const store = createStore(jokesReducer, { jokes: [] });

    const { container } = render(
      <Provider store={store}>
        <MemoryRouter>
          <JokesPage />
        </MemoryRouter>
      </Provider>
    );

    const input = screen.getByTestId('AmountInput');
    const button = screen.getByTestId('ButtonAdd');

    userEvent.type(input, '6');

    expect(button).not.toHaveAttribute('disabled');
  });
});
