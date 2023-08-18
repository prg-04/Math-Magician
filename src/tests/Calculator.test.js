import React from 'react';
import { createRoot } from 'react-dom/client';
import Calculator from '../components/Calculator';

describe('Calculator component', () => {
  test('renders without crashing', () => {
    const container = document.createElement('div');
    const root = createRoot(container);
    root.render(<Calculator />);
  });
});
