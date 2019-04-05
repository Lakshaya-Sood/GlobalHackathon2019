var db = require("mongoose");

db.connect("mongodb://localhost:27017/local", { useNewUrlParser: true });

db.connection.on("error", function(err) {
  console.error("connection error", err);
});
db.connection.once("open", function() {
  console.log("Mongo DB: we're connected!");
});
export default db;
