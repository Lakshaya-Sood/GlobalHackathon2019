import activityRoutes from "./activity_routes";

const routes = function(app) {
  console.debug("Activity routes registering....");
  activityRoutes(app);
  console.debug("Activity routes registered");
};

export default routes;
