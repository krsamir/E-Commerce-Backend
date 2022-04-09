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

transactionController.addToCart = async (req, res, next) => {
  const { productCode } = req.params;
  try {
    await Products.findOne({ where: { productCode } })
      .then((data) => {
        if (data) {
          const addedData = data.toJSON();
          const { id, name, offerprice, actualprice, productCode } = addedData;
          Cart.create({ ProductId: id, UserId: req.id })
            .then(() => {
              res.send({
                status: 1,
                message: "Product added to cart.",
                data: { name, offerprice, actualprice, productCode },
              });
            })
            .catch((e) => {
              if (e.name === "SequelizeUniqueConstraintError") {
                res.send({
                  status: 0,
                  message: "Product is already in your cart.",
                  // error: e.errors[0].message,
                });
              } else {
                next(e);
              }
            });
        } else {
          res.send({ status: 0, message: "Unable to add to cart" });
        }
      })
      .catch((e) => next(e));
  } catch (error) {
    next(error);
  }
};
export default transactionController;
