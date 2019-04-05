import eventModel from "../db/event_model";

const eventApi = {
  fetchAllRecords: function() {
    return new Promise((resolve, reject) => {
      eventModel.find({}).exec((err, eventList) => {
        if (err) {
          reject(err);
        } else {
          resolve(eventList);
        }
      });
    });
  }
};

export default eventApi;
