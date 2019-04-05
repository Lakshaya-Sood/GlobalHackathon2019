import React, { Component } from "react";
import "./activity-tile.scss";

class ActivityTile extends Component {
  render() {
    return (
      <div className="row p-2">
        <div className="col-12 activity cursor-pointer">
          <div className="activity-title">{this.props.title}</div>
          <div className={"activityIcon " + this.props.activityColor}>
            <i className={this.props.icon} aria-hidden="true" />
          </div>
        </div>
      </div>
    );
  }
}

export default ActivityTile;
