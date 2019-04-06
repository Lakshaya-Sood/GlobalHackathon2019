import React from "react";
import { withRouter } from "react-router-dom";
import "./create-sport-request";
import { Button, Checkbox, Form } from "semantic-ui-react";

class CreateSportRequest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      sportsName: sessionStorage.getItem("sportsSelected"),
      availability: "",
      charge: "",
      ground: "",
      playTimestamp: "",
      postedOn: new Date().toISOString(),
      postedBy: "Michael Kapoor",
      age: 43,
      gender: "Male",
      phone: "9999999999",
      type: "sports"
    };
  }

  goToSportsList = () => {
    let { history } = this.props;
    history.push("/sportsList");
  };

  handleInputChange(key, value) {
    console.log(key, value);
    this.setState({ [key]: value });
  }

  saveNewSportRequest = () => {
    this.goToSportsList();
  };

  render() {
    let { title, availability, charge, ground, playTimestamp } = this.state;
    return (
      <React.Fragment>
        <h1 className="mt-4 mb-5">Create post</h1>
        <div className="row mt-3 mb-5">
          <div className="col-12">
            <Form>
              <Form.Field>
                <label>Title</label>
                <input
                  placeholder="Title"
                  name="title"
                  type="text"
                  value={title}
                  onChange={event =>
                    this.handleInputChange("title", event.target.value)
                  }
                />
              </Form.Field>
              <Form.Field>
                <label>Sport</label>
                <select
                  onChange={event =>
                    this.handleInputChange("sport", event.target.value)
                  }
                >
                  <option value="football">Football</option>
                  <option value="cricket">cricket</option>
                </select>
              </Form.Field>
              <Form.Field>
                <label>Availability</label>
                <input
                  placeholder="Availability"
                  name="availability"
                  value={availability}
                  onChange={event =>
                    this.handleInputChange("availability", event.target.value)
                  }
                />
              </Form.Field>
              <Form.Field>
                <label>Charge</label>
                <input
                  placeholder="Charge"
                  name="charge"
                  value={charge}
                  onChange={event =>
                    this.handleInputChange("charge", event.target.value)
                  }
                />
              </Form.Field>
              <Form.Field>
                <label>Ground</label>
                <input
                  placeholder="Ground"
                  name="ground"
                  value={ground}
                  onChange={event =>
                    this.handleInputChange("ground", event.target.value)
                  }
                />
              </Form.Field>
              <Form.Field>
                <label>Time</label>
                <input
                  placeholder="Time"
                  name="playTimestamp"
                  value={playTimestamp}
                  onChange={event =>
                    this.handleInputChange("playTimestamp", event.target.value)
                  }
                />
              </Form.Field>
              <Button
                type="submit"
                className="bg-success text-white"
                onClick={this.saveNewSportRequest}
              >
                Create A Listing
              </Button>
            </Form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(CreateSportRequest);
