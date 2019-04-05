import activityApi from "../api/activity_api";

const activityService = {
  fetchAllRecords: (req, res) => {
    activityApi
      .fetchAllRecords()
      .then(activityList => {
        res.status(200).json({ activityList: activityList }); //Success
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ err: err }); //Internal Server Error
      });
  }
};

export default activityService;
