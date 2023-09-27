import React from 'react';
import { render } from '@testing-library/react';
import Hello from '../../components/Hello';

test('renders NavBar correctly', () => {
  const { asFragment } = render(<Hello />);
  expect(asFragment()).toMatchSnapshot();
});
