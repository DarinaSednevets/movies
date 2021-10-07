import React, { Component, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import Header from './components/Header/Header';
import { routes } from "./routes";

class App extends Component {

  render() {
    return (
      <>
        <Header />
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            {routes.map(({ label, path, exact, component }) => (
              <Route
                key={label}
                path={path}
                exact={exact}
                component={component}
              />
            ))}
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </>
    )
  }
}

export default App;
