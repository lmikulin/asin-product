import React from 'react';
import { render } from '@testing-library/react';
import AsinProduct from './AsinProduct';

test('renders learn react link', () => {
  const { getByText } = render(<AsinProduct />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
