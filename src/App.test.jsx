import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders portfolio hero actions', () => {
    render(<App />);
    expect(screen.getByText(/start a project/i)).toBeInTheDocument();
    expect(screen.getByText(/download resume/i)).toBeInTheDocument();
  });
});
