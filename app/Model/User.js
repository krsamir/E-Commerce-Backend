import { DataTypes } from "sequelize";
import sequelize from "../Database.js";
import Address from "./Address.js";
const User = sequelize.define(
  "User",
  {
    name: {
      type: DataTypes.STRING,
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
    token: {
      type: DataTypes.STRING,
    },
    validTill: {
      type: DataTypes.DATE,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
    },
    invalidLogins: {
      type: DataTypes.BOOLEAN,
      defaultValue: 5,
    },
  },
  {}
);
User.hasMany(Address, { onDelete: "CASCADE" });
export default User;
