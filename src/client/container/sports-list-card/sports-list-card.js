import React from "react";
import { withRouter } from "react-router-dom";
import { Button, Card, Image } from "semantic-ui-react";
import "./sports-list-card";

class SportsListCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;
    return (
      <Card.Group>
        <Card>
          <Card.Content>
            <Image floated="left" size="mini" src="images/profile.png" />
            <Card.Header>{data.title}</Card.Header>
            <Card.Meta>
              {data.postedBy} · {data.gender}, {data.age}
            </Card.Meta>
            <Card.Description>
              <div className="row fs-point7em mt-3">
                <div className="col-6 text-muted mb-2 font-weight-bold">
                  CHARGES
                  <p className="card-data">₹ {data.charge}</p>
                </div>
                <div className="col-6 text-muted mb-2 font-weight-bold">
                  AVAILABILITY
                  <p className="card-data">{data.availability}</p>
                </div>
                <div className="col-6 text-muted mb-2 font-weight-bold">
                  TIME
                  <p className="card-data">02:17 AM</p>
                </div>
                <div className="col-6 text-muted mb-2 font-weight-bold">
                  GROUND
                  <p className="card-data">{data.ground}</p>
                </div>
              </div>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button
                basic
                color={this.props.isJoined === "true" ? "red" : "green"}
              >
                {this.props.isJoined === "true" ? "CANCEL" : "JOIN"}
              </Button>
              <Button basic color="purple">
                CALL
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    );
  }
}

export default withRouter(SportsListCard);
