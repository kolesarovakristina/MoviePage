import React from "react";
import { Switch, Route,Redirect } from "react-router-dom";
import LoginPage from "./containers/LoginPage";
import Dashboard from "./containers/Dashboard";

const App = () => (
  <div>
    <Switch>
    <Route
        exact
        path="/"
        render={() => <Redirect to="/login" />}
      />
      <Route path="/login" component={LoginPage} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  </div>
);

export default App;
