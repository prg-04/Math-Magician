import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import render from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Quotes from './Quotes';

describe('Quotes component', () => {
  it('displays loading when fetching quote', () => {
    const container = document.createElement('div');
    const root = createRoot(container);
    root.render(<Quotes />);
  });
  it('displays fetched quote after loading', async () => {
    const mockQuote = 'This is a mock quote.';
    jest.spyOn(global, 'fetch').mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce([{ quote: mockQuote }]),
    });
    const container = document.createElement('div');
    const root = createRoot(container);
    root.render(<Quotes />);
    global.fetch.mockRestore();
  });
  it('displays error message if fetch fails', async () => {
    const mockErrorMessage = 'Error fetching quote.';
    jest
      .spyOn(global, 'fetch')
      .mockRejectedValueOnce(new Error(mockErrorMessage));
    const container = document.createElement('div');
    const root = createRoot(container);
    root.render(<Quotes />);
    global.fetch.mockRestore();
  });
});
