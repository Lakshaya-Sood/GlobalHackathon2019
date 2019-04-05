import React from "react";
import { withRouter } from "react-router-dom";
import { Button, Card, Image } from "semantic-ui-react";
import "./rides.scss";

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
            className="fa fa-arrow-circle-o-left text-muted fs-27"
            aria-hidden="true"
            onClick={this.goBack}
          />
        </div>
        <div className="col-12">
          <h1 className="mt-3 mb-5">
            <i className="fa fa-car text-primary mr-1" aria-hidden="true" />{" "}
            Rides
          </h1>
        </div>
        <div className="col-sm-6 col-xs-12 col-lg-4">
          <Card.Group>
            <Card>
              <Card.Content>
                <Image floated="right" size="mini" src="images/profile.png" />
                <Card.Header>Steve Sanders</Card.Header>
                <Card.Meta>Friends of Elliot</Card.Meta>
                <Card.Description>
                  Steve wants to add you to the group{" "}
                  <strong>best friends</strong>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className="ui two buttons">
                  <Button basic color="green">
                    Approve
                  </Button>
                  <Button basic color="red">
                    Decline
                  </Button>
                </div>
              </Card.Content>
            </Card>
          </Card.Group>

          <Card.Group>
            <Card>
              <Card.Content>
                <Image floated="right" size="mini" src="images/profile.png" />
                <Card.Header>Steve Sanders</Card.Header>
                <Card.Meta>Friends of Elliot</Card.Meta>
                <Card.Description>
                  Steve wants to add you to the group{" "}
                  <strong>best friends</strong>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className="ui two buttons">
                  <Button basic color="green">
                    Approve
                  </Button>
                  <Button basic color="red">
                    Decline
                  </Button>
                </div>
              </Card.Content>
            </Card>
          </Card.Group>

          <Card.Group>
            <Card>
              <Card.Content>
                <Image floated="right" size="mini" src="images/profile.png" />
                <Card.Header>Steve Sanders</Card.Header>
                <Card.Meta>Friends of Elliot</Card.Meta>
                <Card.Description>
                  Steve wants to add you to the group{" "}
                  <strong>best friends</strong>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className="ui two buttons">
                  <Button basic color="green">
                    Approve
                  </Button>
                  <Button basic color="red">
                    Decline
                  </Button>
                </div>
              </Card.Content>
            </Card>
          </Card.Group>

          <Card.Group>
            <Card>
              <Card.Content>
                <Image floated="right" size="mini" src="images/profile.png" />
                <Card.Header>Steve Sanders</Card.Header>
                <Card.Meta>Friends of Elliot</Card.Meta>
                <Card.Description>
                  Steve wants to add you to the group{" "}
                  <strong>best friends</strong>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className="ui two buttons">
                  <Button basic color="green">
                    Approve
                  </Button>
                  <Button basic color="red">
                    Decline
                  </Button>
                </div>
              </Card.Content>
            </Card>
          </Card.Group>

          <Card.Group>
            <Card>
              <Card.Content>
                <Image floated="right" size="mini" src="images/profile.png" />
                <Card.Header>Steve Sanders</Card.Header>
                <Card.Meta>Friends of Elliot</Card.Meta>
                <Card.Description>
                  Steve wants to add you to the group{" "}
                  <strong>best friends</strong>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className="ui two buttons">
                  <Button basic color="green">
                    Approve
                  </Button>
                  <Button basic color="red">
                    Decline
                  </Button>
                </div>
              </Card.Content>
            </Card>
          </Card.Group>
        </div>
      </div>
    );
  }
}

export default withRouter(Rides);
