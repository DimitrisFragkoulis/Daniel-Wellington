import { render } from '@testing-library/react';
import App from './App';

test('renders the navbar', () => {
  const { container } = render(<App />)
  expect(container.querySelector('nav')).toBeInTheDocument();
});
