import Product from "./Product.js";
import User from "./User.js";
import sequelize from "../Database.js";
import { DataTypes } from "sequelize";

const Cart = sequelize.define("Cart", {
  UserId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: "id",
    },
  },
  ProductId: {
    type: DataTypes.INTEGER,
    references: {
      model: Product,
      key: "id",
    },
  },
});
User.belongsToMany(Product, {
  through: "Cart",
});
Product.belongsToMany(User, {
  through: "Cart",
});
export default Cart;
