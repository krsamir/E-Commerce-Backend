import { DataTypes } from "sequelize";
import sequelize from "../Database.js";
const Role = sequelize.define(
  "Role",
  {
    role: {
      type: DataTypes.STRING,
      unique: true,
    },
  },
  { createdAt: false, updatedAt: false }
);
export default Role;
