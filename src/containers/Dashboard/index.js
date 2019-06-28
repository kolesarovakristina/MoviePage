import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "../Homepage";
import MovieDetailsPage from "../MovieDetailsPage";
import Footer from "../../components/Footer";

const Dashboard = () => {
  return (
    <div>
      <Switch>
        <Route path="/dashboard/homepage" component={Homepage} />
        <Route
          path="/dashboard/moviedetails/:id"
          component={MovieDetailsPage}
        />
      </Switch>
      <Footer text="© 2019 Wirecard Movies " />
    </div>
  );
};
export default Dashboard;
