import { DataTypes } from "sequelize";
import sequelize from "../Database.js";
import Parties from "./Parties.js";
import Role from "./Role.js";

const Admin = sequelize.define(
  "Admin",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
    },
    lastLogin: {
      type: DataTypes.DATE,
    },
    mobile: {
      type: DataTypes.STRING,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
    },
  },
  {}
);
Admin.belongsTo(Role);
Admin.belongsTo(Parties);
export default Admin;
