import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { routes } from "./routes";
import { ConfigRoute } from "./routes/types";
import { Theme } from "./assets/theme";
import { Screen } from "./components/layout";

const name = "Workout Log";

const App = (): JSX.Element => {
  return (
    <Router>
      <Theme />
      <Screen name={name}>
        <Switch>
          {routes.map(
            ({
              component: Component,
              path,
              id,
              exact,
            }: ConfigRoute): JSX.Element => (
              <Route key={id} path={path} exact={exact}>
                <Component />
              </Route>
            )
          )}
        </Switch>
      </Screen>
    </Router>
  );
};

export default App;
