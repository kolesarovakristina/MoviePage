import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginPage from "./containers/LoginPage";
import Homepage from "./containers/Homepage";

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route path="/homepage" component={Homepage} />
    </Switch>
  </div>
);

export default App;
