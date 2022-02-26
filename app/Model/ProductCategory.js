import Product from "./Product.js";
import Category from "./Category.js";
import sequelize from "../Database.js";
import { DataTypes } from "sequelize";

const ProductCategory = sequelize.define("ProductCategory", {
  ProductId: {
    type: DataTypes.INTEGER,
    references: {
      model: Product,
      key: "id",
    },
  },
  CategoryId: {
    type: DataTypes.INTEGER,
    references: {
      model: Category,
      key: "id",
    },
  },
});
Category.belongsToMany(Product, {
  through: "ProductCategory",
});
Product.belongsToMany(Category, {
  through: "ProductCategory",
});
export default ProductCategory;
