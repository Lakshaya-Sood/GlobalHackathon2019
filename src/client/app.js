import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./app.scss";
import Dashboard from "./container/dashboard/dashboard";
import Rides from "./container/rides/rides";
import CreateRide from "./container/create-ride/create-ride";

class App extends Component {
  render() {
    return (
      <div className="row m-0 h-100vh">
        <div className="col-12">
          <Switch>
            <Route exact path="/dashboard" render={() => <Dashboard />} />
            <Route exact path="/ride" render={() => <Rides />} />
            <Route exact path="/createRide" render={() => <CreateRide />} />
            <Redirect to="/dashboard" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
