import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders random color generator heading', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', { name: /random color generator/i }),
  ).toBeInTheDocument();
});

test('enabling screensaver mode generates a color', async () => {
  render(<App />);

  await userEvent.click(
    screen.getByRole('checkbox', { name: /screensaver mode/i }),
  );

  expect(
    screen.getByText((text) => /^#[0-9a-f]{6}$/i.test(text) && text !== '#ffffff'),
  ).toBeInTheDocument();
});
