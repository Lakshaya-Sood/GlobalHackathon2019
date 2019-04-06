import React from "react";
import { withRouter } from "react-router-dom";
import { Search, Modal } from "semantic-ui-react";
import "./rides.scss";
import RideListCard from "../ride-list-card/ride-list-card.js";
import eventApiHelper from "../../api_helper/event_api_helper";

class Rides extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ridesList: [],
      ridesJoined: [
        {
          _id: 1,
          title: "Going to Pluto",
          postedBy: "Elon Musk",
          gender: "Male",
          age: 38,
          from: "SpaceX Rocket Labs",
          to: "Pluto",
          availability: 2,
          phone: "8876347889",
          postedOn: new Date(),
          rideTimestamp: new Date(),
          vehicle: "Rocket",
          type: "ride",
          fare: "870481"
        }
      ]
    };
  }

  goBack = () => {
    const { history } = this.props;
    history.push("/dashboard");
  };

  componentWillMount = () => {
    eventApiHelper
      .fetchEvents()
      .then(eventList => {
        this.setState({ ridesList: eventList });
      })
      .catch(err => {
        console.log(err);
      });
  };

  goToCreateRide = () => {
    let { history } = this.props;
    history.push("/createRide");
  };

  render() {
    return (
      <div className="row mt-2">
        <div className="add-ride" onClick={this.goToCreateRide}>
          <p className="plus-icon-align">+</p>
        </div>
        {/* <div className="col-12">
          <i
            className="fa fa-arrow-circle-o-left text-muted fs-2em"
            aria-hidden="true"
            onClick={this.goBack}
          />
        </div> */}
        <div className="col-12">
          <h1 className="mt-3 mb-4">
            <i className="fa fa-car text-primary mr-1" aria-hidden="true" />{" "}
            Rides
          </h1>
        </div>
        <div className="col-sm-6 col-xs-12 col-lg-4">
          <Search className="mb-3" placeholder="Search for a Ride..." />
          <h5 className="mb-3">
            My current ride ({this.state.ridesJoined.length})
          </h5>
          {this.state.ridesJoined.map(ride => {
            return <RideListCard data={ride} key={ride._id} isJoined="true" />;
          })}
          <h5 className="mt-5">
            Requests within 250m. ({this.state.ridesList.length})
          </h5>
          {this.state.ridesList.map(ride => {
            return <RideListCard data={ride} key={ride._id} isJoined="false" />;
          })}
        </div>
      </div>
    );
  }
}

export default withRouter(Rides);
