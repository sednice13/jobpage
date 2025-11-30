import { render, screen } from '@testing-library/react';
import Menu from '../Menu';

test('renders menu items', () => {
  render(<Menu />);
  expect(screen.getByText(/GitHub/i)).toBeInTheDocument();
  expect(screen.getByText(/Jobs/i)).toBeInTheDocument();
  expect(screen.getByText(/CV/i)).toBeInTheDocument();
});

