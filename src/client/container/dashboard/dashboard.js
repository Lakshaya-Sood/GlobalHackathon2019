import React from "react";
import { withRouter } from "react-router-dom";
import { ActivityTileTray } from "../../components/activity_tile_components";
import activityApiHelper from "../../api_helper/activity_api_helper";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activitiesJson: []
    };
  }
  componentWillMount = () => {
    activityApiHelper
      .fetchActivities()
      .then(activityList => {
        this.setState({ activitiesJson: activityList });
      })
      .catch(err => {
        console.log(err);
      });
  };

  onActivitySelection = activity => {
    let { history } = this.props;
    if (activity.title === "rides") {
      history.push("/ride");
    }
    if (activity.title === "sports") {
      history.push("/sports");
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
