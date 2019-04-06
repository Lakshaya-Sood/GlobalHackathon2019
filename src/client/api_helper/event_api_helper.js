import axios from "axios";

const eventApiHelper = {
  fetchEvents: (filters) => {
    return new Promise((resolve, reject) => {
      axios
        .get("/api/internal/event",{
          params: {
            filters: filters
          }
        })
        .then(response => {
          resolve(response.data.eventList);
        })
        .catch(err => {
          console.log("err", err);
          reject(err);
        });
    });
  },
  saveEvents: (eventRecord) => {
    return new Promise((resolve, reject) => {
      axios
        .post("/api/internal/event",{
          eventRecord:eventRecord
        })
        .then(response => {
          resolve(response.data.eventRecord);
        })
        .catch(err => {
          console.log("err", err);
          reject(err);
        });
    });
  }
};

export default eventApiHelper;
