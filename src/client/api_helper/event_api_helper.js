import axios from "axios";

const eventApiHelper = {
  fetchActivities: () => {
    return new Promise((resolve, reject) => {
      axios
        .get("/api/internal/event")
        .then(response => {
          resolve(response.data.eventList);
        })
        .catch(err => {
          console.log('err',err)
          reject(err);
        });
    });
  }
};

export default eventApiHelper;
