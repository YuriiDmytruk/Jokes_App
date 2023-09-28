import * as React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavBar from '../../components/NavBar';

test('renders NavBar correctly', () => {
  const { asFragment } = render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
