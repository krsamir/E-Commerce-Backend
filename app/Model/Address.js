import { DataTypes } from "sequelize";
import sequelize from "../Database.js";
const Address = sequelize.define(
  "Address",
  {
    fullName: {
      type: DataTypes.STRING,
    },
    mobileNumber: {
      type: DataTypes.STRING,
    },
    pincode: {
      type: DataTypes.STRING,
    },
    houseno: {
      type: DataTypes.STRING,
    },
    area: {
      type: DataTypes.DATE,
    },
    landmark: {
      type: DataTypes.STRING,
    },
    townCity: {
      type: DataTypes.STRING,
    },
    state: {
      type: DataTypes.STRING,
    },
  },
  {}
);

export default Address;
