import Products from "../Model/Product.js";
import User from "../Model/User.js";
import Cart from "../Model/Cart.js";
const transactionController = {};

transactionController.getProfile = async (req, res) => {
  const userId = req.id;
  const data = await User.findOne({
    where: userId,
    attributes: ["name"],
    include: [
      {
        model: Products,
        through: Cart,
        attributes: ["name", "offerprice", "actualprice", "productCode"],
      },
    ],
  });
  res.send(data);
};
export default transactionController;
