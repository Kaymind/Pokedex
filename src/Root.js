import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { AppProvider } from './lib/AppProvider';
import App from './App';

export function Root({ client }) {
  return (
    <AppProvider client={client}>
      <Router>
        <App />
      </Router>
    </AppProvider>
  );
}
