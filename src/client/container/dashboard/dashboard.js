import React from "react";
import { ActivityTileTray } from "../../components/activity_tile_components";

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activitiesJson: [
        {
          title: "rides",
          icon: "fa fa-car",
          activityColor: "bg-travel"
        },
        {
          title: "food",
          icon: "fa fa-cutlery",
          activityColor: "bg-food"
        },
        {
          title: "sports",
          icon: "fa fa-heartbeat",
          activityColor: "bg-sports"
        }
      ]
    };
  }

  render() {
    let { activitiesJson } = this.state;
    return <ActivityTileTray activityList={activitiesJson} />;
  }
}
