import React from 'react';
import { render } from '@testing-library/react';
import Hello from '../../components/Hello'; // Import your component

// This will automatically generate and update snapshots
test('renders NavBar correctly', () => {
  const { asFragment } = render(<Hello />);
  expect(asFragment()).toMatchSnapshot();
});
