import React from "react";
import { withRouter } from "react-router-dom";
import { Button, Card, Image } from "semantic-ui-react";
import "./ride-list-card.scss";

class RideListCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card.Group>
        <Card>
          <Card.Content>
            <Image floated="left" size="mini" src="images/profile.png" />
            <Card.Header>Ride title goes here</Card.Header>
            <Card.Meta>John Doe · Female, 21</Card.Meta>
            <Card.Description>
              <div className="row fs-point7em mt-3">
                <div className="col-6 text-muted mb-2">
                  FROM
                  <p className="card-data">Pune Airport</p>
                </div>
                <div className="col-6 text-muted mb-2">
                  TO
                  <p className="card-data">Ashok Meadows, Hinjewadi Phase 1</p>
                </div>
                <div className="col-6 text-muted mb-2">
                  FARE
                  <p className="card-data">₹ 600</p>
                </div>
                <div className="col-6 text-muted mb-2">
                  AVAILABILITY
                  <p className="card-data">3</p>
                </div>
                <div className="col-6 text-muted mb-2">
                  TIME
                  <p className="card-data">02:17 AM</p>
                </div>
                <div className="col-6 text-muted mb-2">
                  VEHICLE
                  <p className="card-data">Ola Cab</p>
                </div>
              </div>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                JOIN
              </Button>
              <Button basic color="violet">
                CALL
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    );
  }
}

export default withRouter(RideListCard);
