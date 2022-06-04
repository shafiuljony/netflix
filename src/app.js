import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { Home, Browse, Signin, Signup } from './pages';

export default function App() {
  return (
    <Router>
      <Route exect path="/browse">
        <Browse />
      </Route>
      <Route exect path="/signin">
        <Signin />
      </Route>
      <Route exect path="/signup">
        <Signup />
      </Route>
      <Route exect path={ROUTES.HOME}>
        <Home />
      </Route>
    </Router>
  );
}
