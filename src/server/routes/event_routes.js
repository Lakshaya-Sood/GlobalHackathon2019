import eventService from "../service/event_service";

const eventRoutes = function(app) {
  app
    .route("/api/internal/event")
    .get(eventService.fetchAllRecords);
};

export default eventRoutes;
