import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AppRouter from './components/AppRouter';

function App() {
  return (
    <Router>
      <AppRouter />
    </Router>
  );
}

export default App;
