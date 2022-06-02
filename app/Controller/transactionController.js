import Products from "../Model/Product.js";
import User from "../Model/User.js";
import Cart from "../Model/Cart.js";
import Images from "../Model/Images.js";
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";
import { AppConstant } from "../../Constants.js";

const transactionController = {};
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

transactionController.getCart = async (req, res) => {
  const userId = req.id;

  try {
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
      const data = product.map(
        ({ name, offerprice, actualprice, productCode }) => ({
          name,
          offerprice,
          actualprice,
          productCode,
        })
      );
      res.send({ count: product.length, name, data });
    } else {
      res.send({ count: 0, name, data: [] });
    }
  } catch (error) {
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

transactionController.getAllCart = async (req, res, next) => {
  const userId = req.id;
  try {
    const rows = await User.findAll({
      where: userId,
      attributes: ["name"],
      include: [
        {
          model: Products,
          through: Cart,
          attributes: [
            "id",
            "name",
            "offerprice",
            "actualprice",
            "productCode",
            "totalstocks",
          ],
          include: {
            model: Images,
            required: false,
            where: {
              category: AppConstant.CATEGORIES.PROFILE,
            },
          },
        },
      ],
    });
    const [item] = JSON.parse(JSON.stringify(rows));
    const { Products: product, name } = item;
    if (product.length) {
      const data = product.map(
        ({
          name,
          offerprice,
          actualprice,
          productCode,
          Images,
          totalstocks,
          id,
        }) => ({
          id,
          name,
          offerprice,
          actualprice,
          productCode,
          stocks: totalstocks > 10 ? "instock" : totalstocks,
          image: Images.map(({ filename, category, id }) => {
            try {
              const fileData = fs.readFileSync(
                `${path.join(__dirname, "../../Images/", filename)}`,
                "base64"
              );
              return { file: filename, data: fileData, category, id };
            } catch (error) {
              return { file: filename, data: null, category: null, id: null };
            }
          }),
        })
      );
      res.send({ count: product.length, name, data });
    } else {
      res.send({ count: 0, name, data: [] });
    }
  } catch (error) {
    next(error);
  }
};

transactionController.deleteCartItem = async (req, res, next) => {
  try {
    const value = await Cart.destroy({
      where: { UserId: req.id, ProductId: req.params.id },
    });
    console.log(value);
    if (value) {
      res.send({ status: 1, message: "Item removed from cart.", value });
    } else {
      res.send({
        status: 0,
        message: "Unable to remove Item from Cart.",
        value,
      });
    }
  } catch (error) {
    next(error);
  }
};
export default transactionController;
