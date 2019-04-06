import db from "../db";

const Event = db.model(
  "Event",
  {
    name: String,
    title: String,
    postedBy: String,
    gender: String,
    age: Number,
    from: String,
    to: String,
    availability: Number,
    phone: String,
    postedOn: Date,
    rideTimestamp: Date,
    vehicle: String,
    type: String,
    fare: String,
    ground: String,
    playTimestamp: Date,
    sportName: String,
    charge: Number
  },
  "event"
);

export default Event;
