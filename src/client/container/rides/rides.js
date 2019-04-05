import React from "react";
import { withRouter } from "react-router-dom";

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
      <div>
        Rides
        <div onClick={this.goBack}> {"<"} click here to go back</div>
      </div>
    );
  }
}

export default withRouter(Rides);
