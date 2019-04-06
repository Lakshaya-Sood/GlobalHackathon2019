import React from "react";
import { withRouter } from "react-router-dom";
import { Search } from "semantic-ui-react";
import "./sports-list";
import SportsListCard from "../sports-list-card/sports-list-card";
import eventApiHelper from "../../api_helper/event_api_helper";

class SportsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sportsList: [
        {
          _id: 1,
          title: "Going for Football",
          postedBy: "Elon Musk",
          gender: "Male",
          age: 38,
          ground: "SpaceX Launchpad",
          availability: 10,
          phone: "8876347889",
          postedOn: new Date(),
          rideTimestamp: new Date(),
          type: "sports",
          sportName: "football",
          charges: "NIL"
        }
      ],
      sportsJoined: [
        {
          _id: 99,
          title: "Looking for goal keeper",
          postedBy: "Jeff Bezos",
          gender: "Male",
          age: 49,
          ground: "Amazon Inc",
          availability: 1,
          phone: "8876347889",
          postedOn: new Date(),
          rideTimestamp: new Date(),
          type: "sports",
          sportName: "football",
          charges: "100"
        }
      ]
    };
  }

  //   componentWillMount = () => {
  //     eventApiHelper
  //       .fetchEvents()
  //       .then(eventList => {
  //         this.setState({ ridesList: eventList });
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       });
  //   };

  goToCreateSport = () => {
    let { history } = this.props;
    history.push("/createRide");
  };

  render() {
    return (
      <div className="row mt-2">
        <div className="add-ride" onClick={this.goToCreateRide}>
          <p className="plus-icon-align">+</p>
        </div>
        <div className="col-12">
          <h1 className="mt-3 mb-4">
            <i
              className="fa fa fa-heartbeat text-danger mr-1"
              aria-hidden="true"
            />{" "}
            Sports
          </h1>
        </div>
        <div className="col-sm-6 col-xs-12 col-lg-4">
          <Search
            className="mb-3"
            placeholder={
              "Search " + sessionStorage.getItem("sportsSelected") + "..."
            }
          />
          <h5 className="mb-3">My teams ({this.state.sportsJoined.length})</h5>
          {this.state.sportsJoined.map(ride => {
            return (
              <SportsListCard data={ride} key={ride._id} isJoined="true" />
            );
          })}
          <h5 className="mt-5">
            Players around me ({this.state.sportsList.length})
          </h5>
          {this.state.sportsList.map(ride => {
            return (
              <SportsListCard data={ride} key={ride._id} isJoined="false" />
            );
          })}
        </div>
      </div>
    );
  }
}

export default withRouter(SportsList);
