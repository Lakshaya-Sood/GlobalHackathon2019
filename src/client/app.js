import React, { Component } from "react";
import { Route, Switch, Link, Redirect, NavLink } from "react-router-dom";
import "./app.scss";
import Dashboard from "./container/dashboard/dashboard";
import Rides from "./container/rides/rides";

class App extends Component {
  render() {
    return (
      <div className="row m-0">
        <div className="col-12">
          <Switch>
            <Route exact path="/dashboard" render={() => <Dashboard />} />
            <Route exact path="/ride" render={() => <Rides />} />
            <Redirect to="/dashboard" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
