import React from "react";
import { withRouter } from "react-router-dom";
import "./sports.scss";

class Sports extends React.Component {
  constructor(props) {
    super(props);
  }

  goToSportList = sport => {
    let { history } = this.props;
    sessionStorage.setItem("sportsSelected", sport);
    history.push("/sportsList");
  };

  render() {
    return (
      <div className="row p-2">
        <h1 className="mt-3 mb-4">
          <i className="fa fa-futbol-o text-success mr-1" aria-hidden="true" />{" "}
          Pick a sport
        </h1>
        <div
          className="col-6 pt-5 pb-5 font-weight-bold text-center cursor-pointer"
          onClick={() => this.goToSportList("football")}
        >
          <p className="p-3">
            <i className="fa fa-futbol-o text-danger mr-1" aria-hidden="true" />
          </p>
          Football
        </div>
        <div
          className="col-6 pt-5 pb-5 font-weight-bold text-center cursor-pointer"
          onClick={() => this.goToSportList("cricket")}
        >
          <p className="p-3">
            <i className="fa fa-futbol-o text-danger mr-1" aria-hidden="true" />
          </p>
          Cricket
        </div>
        <div
          className="col-6 pt-5 pb-5 font-weight-bold text-center cursor-pointer"
          onClick={() => this.goToSportList("badminton")}
        >
          <p className="p-3">
            <i className="fa fa-futbol-o text-danger mr-1" aria-hidden="true" />
          </p>
          Badminton
        </div>
        <div
          className="col-6 pt-5 pb-5 font-weight-bold text-center cursor-pointer"
          onClick={() => this.goToSportList("bowling")}
        >
          <p className="p-3">
            <i className="fa fa-futbol-o text-danger mr-1" aria-hidden="true" />
          </p>
          Bowling
        </div>
        <div
          className="col-6 pt-5 pb-5 font-weight-bold text-center cursor-pointer"
          onClick={() => this.goToSportList("tennis")}
        >
          <p className="p-3">
            <i className="fa fa-futbol-o text-danger mr-1" aria-hidden="true" />
          </p>
          Tennis
        </div>
        <div
          className="col-6 pt-5 pb-5 font-weight-bold text-center cursor-pointer"
          onClick={() => this.goToSportList("snooker")}
        >
          <p className="p-3">
            <i className="fa fa-futbol-o text-danger mr-1" aria-hidden="true" />
          </p>
          Snooker
        </div>
      </div>
    );
  }
}

export default withRouter(Sports);
