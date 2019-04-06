import eventService from "../service/event_service";

const eventRoutes = function(app) {
  app
    .route("/api/internal/event")
    .get(eventService.fetchAllRecords);
  
    app
    .route("/api/internal/event")
    .post(eventService.insertRecord);
};

export default eventRoutes;
