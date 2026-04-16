import { expect, test } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders random color generator heading', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', { name: /random color generator/i }),
  // @ts-ignore
  ).toBeInTheDocument();
});
