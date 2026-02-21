import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio hero actions', () => {
  render(<App />);
  expect(screen.getByText(/start a project/i)).toBeInTheDocument();
  expect(screen.getByText(/download resume/i)).toBeInTheDocument();
});
