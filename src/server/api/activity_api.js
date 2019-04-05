import activityModel from "../db/activity_model";

const activityApi = {
  fetchAllRecords: function() {
    return new Promise((resolve, reject) => {
      activityModel.find({}).exec((err, activityList) => {
        if (err) {
          reject(err);
        } else {
          resolve(activityList);
        }
      });
    });
  }
};

export default activityApi;
