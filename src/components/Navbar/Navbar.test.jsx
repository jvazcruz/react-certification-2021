import { render, screen } from '@testing-library/react';
import React from 'react';
import Navbar from './Navbar.component';

describe('navbar', () => {
  beforeEach(() => {
    render(<Navbar />);
  });

  test('should contains a label', () => {
    const label = screen.getByLabelText('Dark Mode');

    expect(label).toBeInTheDocument();
  });

  test('should contains a search input', () => {
    const input = screen.queryByPlaceholderText(/Search/i);

    expect(input).toBeInTheDocument();
  });

  test('should contains a search button', () => {
    const button = screen.queryByRole('button');

    expect(button).toBeInTheDocument();
  });
});