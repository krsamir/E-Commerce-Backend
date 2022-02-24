import { DataTypes } from "sequelize";
import sequelize from "../Database.js";
const Category = sequelize.define(
  "Category",
  {
    name: {
      type: DataTypes.STRING,
    },
  },
  {}
);

export default Category;
