import { render, screen } from '@testing-library/react';
import { expect, it } from 'vitest';
import { App } from './App';

it('renders the showcase heading', () => {
  render(<App />);

  expect(screen.getByRole('heading', { name: 'Viper UI Showcase' })).toBeInTheDocument();
});
