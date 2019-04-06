import axios from "axios";

const activityApiHelper = {
  fetchActivities: () => {
    return new Promise((resolve, reject) => {
      axios
        .get("/api/internal/activity")
        .then(response => {
          resolve(response.data.activityList);
        })
        .catch(err => {
          console.log("err", err);
          reject(err);
        });
    });
  }
};

export default activityApiHelper;
