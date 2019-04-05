import Sequelize from "sequelize";

const db = new Sequelize("gb_hack_2019", "postgres", "qwerty123", {
  dialect: "postgres",
  host: "localhost",
  port: 5433
});

export default db;
