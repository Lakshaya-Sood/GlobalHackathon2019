import React from "react";
import { withRouter } from "react-router-dom";
import { ActivityTileTray } from "../../components/activity_tile_components";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activitiesJson: [
        {
          id: 1,
          title: "rides",
          icon: "fa fa-car",
          activityColor: "bg-travel"
        },
        {
          id: 2,
          title: "food",
          icon: "fa fa-cutlery",
          activityColor: "bg-food"
        },
        {
          id: 3,
          title: "sports",
          icon: "fa fa-heartbeat",
          activityColor: "bg-sports"
        }
      ]
    };
  }
  onActivitySelection = activity => {
    let { history } = this.props;
    if (activity.title === "rides") {
      history.push("/ride");
    }
  };

  render() {
    let { activitiesJson } = this.state;
    return (
      <ActivityTileTray
        activityList={activitiesJson}
        onActivitySelection={this.onActivitySelection}
      />
    );
  }
}

export default withRouter(Dashboard);
