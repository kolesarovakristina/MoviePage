import { Router } from "@reach/router";
import React from "react";
import LoginPage from "./containers/LoginPage";

export default () => {
  return (
    <Router>
      <LoginPage path="/login" />
    </Router>
  );
};