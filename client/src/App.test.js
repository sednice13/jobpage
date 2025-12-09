import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('navigates from Landing to Home on title click', async () => {
  render(<App />);
  const title = screen.getByRole('heading', { level: 1 });
  expect(title).toBeInTheDocument();

  await userEvent.click(title);

  expect(screen.getByText('Hem')).toBeInTheDocument();
});
