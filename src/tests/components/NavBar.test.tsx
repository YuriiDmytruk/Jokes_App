import * as React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import NavBar from '../../components/NavBar';

test('should render NavBar component and match snapshot', () => {
  const { asFragment } = render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
