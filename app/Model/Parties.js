import { DataTypes } from "sequelize";
import sequelize from "../Database.js";
const Parties = sequelize.define(
  "Parties",
  {
    name: {
      type: DataTypes.STRING,
    },
    contact: {
      type: DataTypes.STRING,
    },
  },
  {}
);
export default Parties;
