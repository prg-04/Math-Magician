import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Navbar';

describe('Navbar component', () => {
  test('renders without crashing', () => {
    const root = document.createElement('div');
    createRoot(root).render(
      <Router>
        <Navbar />
      </Router>,
    );
  });
});
