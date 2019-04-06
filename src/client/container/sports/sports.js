import React from "react";
import { withRouter } from "react-router-dom";
import "./sports.scss";

class Sports extends React.Component {
  constructor(props) {
    super(props);
  }

  goToFootball = () => {
    let { history } = this.props;
    sessionStorage.setItem("sportsSelected", "Football");
    history.push("/sportsList");
  };

  render() {
    return (
      <div className="row p-2">
        <div
          className="col-6 card p-5 font-weight-bold text-center"
          onClick={this.goToFootball}
        >
          Football
        </div>
        <div className="col-6 card p-5 font-weight-bold text-center">
          Cricket
        </div>
        <div className="col-6 card p-5 font-weight-bold text-center">
          Badminton
        </div>
        <div className="col-6 card p-5 font-weight-bold text-center">
          Squash
        </div>
        <div className="col-6 card p-5 font-weight-bold text-center">
          Table Tennis
        </div>
        <div className="col-6 card p-5 font-weight-bold text-center">
          Jogging
        </div>
      </div>
    );
  }
}

export default withRouter(Sports);
