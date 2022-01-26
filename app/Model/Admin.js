import { DataTypes } from "sequelize";
import sequelize from "../Database.js";

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
  },
  {}
);

export default Admin;
