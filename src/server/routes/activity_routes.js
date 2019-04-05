import activityService from "../service/activity_service";

const activityRoutes = function(app) {
  app
    .route("/api/internal/activity")
    .get(activityService.fetchAllRecords);
};

export default activityRoutes;
