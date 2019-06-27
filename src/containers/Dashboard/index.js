import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "../Homepage";
import MovieDetailsPage from "../MovieDetailsPage";
import Header from "../../components/Header";

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
        <Route path="/dashboard/homepage" component={Homepage} />
      <Route path="/dashboard/moviedetails/:id" component={MovieDetailsPage} />
        </Switch>
        {/* <Footer text="© 2018 FROM2HAND" /> */}
      </div>
    );
  }
}
export default Dashboard;