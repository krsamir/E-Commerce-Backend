import Products from "../Model/Product.js";
import User from "../Model/User.js";
import Cart from "../Model/Cart.js";
const transactionController = {};

transactionController.getProfile = async (req, res) => {
  const userId = req.id;
  const { rows, count } = await User.findAndCountAll({
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
  const [item] = JSON.parse(JSON.stringify(rows));
  const { Products: product, name } = item;
  const data = product
    .slice(0, 4)
    .map(({ name, offerprice, actualprice, productCode }) => ({
      name,
      offerprice,
      actualprice,
      productCode,
    }));
  res.send({ count, name, data });
};
export default transactionController;
