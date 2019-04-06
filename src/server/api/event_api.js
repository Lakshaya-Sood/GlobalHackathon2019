import eventModel from "../db/event_model";

const eventApi = {
  fetchAllRecords: function(filters) {
    return new Promise((resolve, reject) => {
      eventModel.find(filters).exec((err, eventList) => {
        if (err) {
          reject(err);
        } else {
          resolve(eventList);
        }
      });
    });
  },
  insertRecord: function(eventRecord) {
    console.log(eventRecord);
    return new Promise((resolve, reject) => {
      var newEvent = new eventModel(eventRecord);
      newEvent.save((err, eventRecord) => {
        if (err) {
          reject(err);
        } else {
          resolve(eventRecord);
        }
      });
    });
  }
};

export default eventApi;
