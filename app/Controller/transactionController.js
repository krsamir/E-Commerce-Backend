import Products from "../Model/Product.js";
import User from "../Model/User.js";
import Cart from "../Model/Cart.js";
const transactionController = {};

transactionController.getCart = async (req, res) => {
  const userId = req.id;
  const rows = await User.findAll({
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
  if (product.length) {
    const data = product
      .slice(0, 4)
      .map(({ name, offerprice, actualprice, productCode }) => ({
        name,
        offerprice,
        actualprice,
        productCode,
      }));
    res.send({ count: product.length, name, data });
  } else {
    res.send({ count: 0, name, data: [] });
  }
};
export default transactionController;
