import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginPage from "./containers/LoginPage";
import Homepage from "./containers/Homepage";
import MovieDetailsPage from "./containers/MovieDetailsPage";

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route path="/homepage" component={Homepage} />
      <Route path="/movieDetails" component={MovieDetailsPage} />
    </Switch>
  </div>
);

export default App;
