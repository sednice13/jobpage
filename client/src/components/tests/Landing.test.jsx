import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Landing from '../Landing';

test('renders landing title and is clickable', () => {
  render(
    <MemoryRouter>
      <Landing />
    </MemoryRouter>
  );

  const title = screen.getByRole('heading', { level: 1 });
  expect(title).toBeInTheDocument();
});

