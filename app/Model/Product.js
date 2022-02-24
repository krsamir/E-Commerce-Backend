import { DataTypes } from "sequelize";
import sequelize from "../Database.js";
import Images from "./Images.js";
const Product = sequelize.define(
  "Product",
  {
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    offerprice: {
      type: DataTypes.INTEGER,
    },
    actualprice: {
      type: DataTypes.INTEGER,
    },
    totalstocks: {
      type: DataTypes.INTEGER,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
    },
    createdby: {
      type: DataTypes.STRING,
    },
    keepinstocktill: {
      type: DataTypes.DATEONLY,
    },
  },
  {}
);
Product.hasMany(Images, { onDelete: "CASCADE" });
export default Product;
