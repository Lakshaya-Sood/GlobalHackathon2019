import React, { Component } from "react";
import "./home.scss";
import ActivityTile from "../activity-tile/activity-tile";

class Home extends Component {
  render() {
    return (
      <div className="row pt-5">
        <div className="col-6">
          <ActivityTile
            title="rides"
            icon="fa fa-car"
            activityColor="bg-travel"
          />
        </div>
        <div className="col-6">
          <ActivityTile
            title="food"
            icon="fa fa-cutlery"
            activityColor="bg-food"
          />
        </div>
        <div className="col-6">
          <ActivityTile
            title="sports"
            icon="fa fa-heartbeat"
            activityColor="bg-sports"
          />
        </div>
        {/* <div className="col-6">
          <ActivityTile
            title="jam"
            icon="fa fa-music"
            activityColor="bg-sports"
          />
        </div>
        <div className="col-6">
          <ActivityTile
            title="code"
            icon="fa fa-code"
            activityColor="bg-sports"
          />
        </div>
        <div className="col-6">
          <ActivityTile
            title="movie"
            icon="fa fa-film"
            activityColor="bg-sports"
          />
        </div> */}
      </div>
    );
  }
}

export default Home;
