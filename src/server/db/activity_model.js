import db from "../db";

const Activity = db.model("Activity", {
  name: String,
  tilte: String,
  icon: String,
  activityColor: String
}, "activity");

export default Activity;
