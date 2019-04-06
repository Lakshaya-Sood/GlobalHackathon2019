import React from "react";
import { withRouter } from "react-router-dom";
import "./create-ride.scss";
import { Button, Checkbox, Form } from "semantic-ui-react";

class CreateRide extends React.Component {
  constructor(props) {
    super(props);
  }

  goToUber = () => {
    window.location.href = "https://m.uber.com";
  };

  goToOla = () => {
    window.location.href = "https://book.olacabs.com";
  };

  goToRides = () => {
    let { history } = this.props;
    history.push("/ride");
  };

  render() {
    return (
      <div className="row mt-3 mb-5">
        <div className="col-6">
          <button className="btn cta-book uber" onClick={this.goToUber}>
            Book Uber
          </button>
        </div>
        <div className="col-6">
          <button className="btn cta-book ola" onClick={this.goToOla}>
            Book Ola
          </button>
        </div>
        <h4 className="col-12 text-center or">OR</h4>
        <div className="col-12">
          <Form>
            <Form.Field>
              <label>From</label>
              <input placeholder="From" />
            </Form.Field>
            <Form.Field>
              <label>To</label>
              <input placeholder="To" />
            </Form.Field>
            <Form.Field>
              <label>Fare</label>
              <input placeholder="Fare" />
            </Form.Field>
            <Form.Field>
              <label>Vehicle</label>
              <input placeholder="Vehicle" />
            </Form.Field>
            <Form.Field>
              <label>Time</label>
              <input placeholder="Time" />
            </Form.Field>
            <Form.Field>
              <label>Availability</label>
              <input placeholder="Availability" />
            </Form.Field>
            <Form.Field>
              <Checkbox label="I agree to the Terms and Conditions" />
            </Form.Field>
            <Button
              type="submit"
              className="bg-success text-white"
              onClick={this.goToRides}
            >
              Create A Listing
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default withRouter(CreateRide);
