import React from "react";
import { withRouter } from "react-router-dom";
import { Search } from "semantic-ui-react";
import "./rides.scss";
import RideListCard from "../ride-list-card/ride-list-card.js";

class Rides extends React.Component {
  constructor(props) {
    super(props);
  }

  goBack = () => {
    const { history } = this.props;
    history.push("/dashboard");
  };

  render() {
    return (
      <div className="row mt-2">
        <div className="add-ride">+</div>
        <div className="col-12">
          <i
            className="fa fa-arrow-circle-o-left text-muted fs-2em"
            aria-hidden="true"
            onClick={this.goBack}
          />
        </div>
        <div className="col-12">
          <h1 className="mt-3 mb-4">
            <i className="fa fa-car text-primary mr-1" aria-hidden="true" />{" "}
            Rides
          </h1>
        </div>
        <div className="col-sm-6 col-xs-12 col-lg-4">
          <Search className="mb-3" />
          <RideListCard />
        </div>
      </div>
    );
  }
}

export default withRouter(Rides);
