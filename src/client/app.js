import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./app.scss";
import Dashboard from "./container/dashboard/dashboard";
import Rides from "./container/rides/rides";
import CreateRide from "./container/create-ride/create-ride";
import Sports from "./container/sports/sports";
import SportsList from "./container/sports-list/sports-list";
import CreateSportRequest from "./container/create-sport-request/create-sport-request";

class App extends Component {
  render() {
    return (
      <div className="row m-0 h-100vh">
        <div className="col-12">
          <Switch>
            <Route exact path="/dashboard" render={() => <Dashboard />} />
            <Route exact path="/ride" render={() => <Rides />} />
            <Route exact path="/createRide" render={() => <CreateRide />} />
            <Route exact path="/sports" render={() => <Sports />} />
            <Route exact path="/sportsList" render={() => <SportsList />} />
            <Route
              exact
              path="/createSportRequest"
              render={() => <CreateSportRequest />}
            />
            <Redirect to="/dashboard" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
