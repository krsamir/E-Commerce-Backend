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
    dob: {
      type: DataTypes.DATEONLY,
    },
  },
  {}
);
User.belongsTo(Address, { onDelete: "CASCADE" });
export default User;
