import React from "react";
import { withRouter } from "react-router-dom";
import "./create-sport-request";
import { Button, Checkbox, Form } from "semantic-ui-react";

class CreateSportRequest extends React.Component {
  constructor(props) {
    super(props);
  }

  goToSportsList = () => {
    let { history } = this.props;
    history.push("/sportsList");
  };

  render() {
    return (
      <React.Fragment>
        <h1 className="mt-4 mb-5">Create post</h1>

        <div className="row mt-3 mb-5">
          <div className="col-12">
            <Form>
              <Form.Field>
                <label>Title</label>
                <input placeholder="Title" />
              </Form.Field>
              <Form.Field>
                <label>Sport</label>
                <select>
                  <option value="football">Football</option>
                </select>
              </Form.Field>
              <Form.Field>
                <label>Availability</label>
                <input placeholder="Availability" />
              </Form.Field>
              <Form.Field>
                <label>Charge</label>
                <input placeholder="Charge" />
              </Form.Field>
              <Form.Field>
                <label>Ground</label>
                <input placeholder="Ground" />
              </Form.Field>
              <Form.Field>
                <label>Time</label>
                <input placeholder="Time" />
              </Form.Field>
              <Button
                type="submit"
                className="bg-success text-white"
                onClick={this.goToSportsList}
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
