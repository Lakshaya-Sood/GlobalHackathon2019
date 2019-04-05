import activityRoutes from "./activity_routes";
import eventRoutes from "./event_routes";

const routes = function(app) {
  console.debug("Activity routes registering....");
  activityRoutes(app);
  console.debug("Activity routes registered");

  console.debug("Event routes registering....");
  eventRoutes(app);
  console.debug("Event routes registered");
};

export default routes;
