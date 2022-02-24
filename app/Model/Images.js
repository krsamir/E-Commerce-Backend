import { DataTypes } from "sequelize";
import sequelize from "../Database.js";
const Images = sequelize.define(
  "Images",
  {
    filename: {
      type: DataTypes.STRING,
    },
    category: {
      type: DataTypes.STRING,
    },
    filetype: {
      type: DataTypes.STRING,
    },
    size: {
      type: DataTypes.INTEGER,
    },
  },
  {}
);
export default Images;
