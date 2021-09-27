import React from 'react';
import { Route, Switch } from 'react-router';
import { routes } from '../router';

function AppRouter() {
  return (
    <Switch>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          component={route.component}
          exact={route.exact}
        />
      ))}
    </Switch>
  );
}

export default AppRouter;
