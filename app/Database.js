import { Sequelize } from "sequelize";
import env from "dotenv";
env.config();
const {
  MYSQLDATABASE,
  MYSQLHOST,
  MYSQLPASSWORD,
  MYSQLPORT,
  MYSQLUSER,
  TIMEZONE,
} = process.env;
const sequelize = new Sequelize(MYSQLDATABASE, MYSQLUSER, MYSQLPASSWORD, {
  host: MYSQLHOST,
  port: MYSQLPORT,
  timezone: TIMEZONE,
  dialect: "mysql",
  logging: false,
});

sequelize
  .authenticate()
  .then(() => {
    console.log([{ Status: `DATABASE CONNECTED TO PORT ${MYSQLPORT}` }]);
  })
  .catch((e) => {
    console.log(e);
  });

export default sequelize;
