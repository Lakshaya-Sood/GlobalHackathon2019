import app from "./app";
import db from './db';

app.listen(app.get("port"), function() {
  console.info(`Server started listening on port ${app.get("port")}.`);
});

process.on('SIGINT', function() {
  console.log(`Gracefully shutting down from SIGINT (Ctrl-C)`);
  db.connection.close();
  process.exit(1);
});
