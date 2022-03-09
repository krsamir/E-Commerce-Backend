import Category from "../Model/Category.js";
import Images from "../Model/Images.js";
import Products from "../Model/Product.js";
import ProductCategory from "../Model/ProductCategory.js";
import { Op } from "sequelize";

const productController = {};

productController.getAllCategory = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.send({ status: 1, messsage: "", data: categories });
  } catch (error) {
    res.send({ status: 0, messsage: "Some issue while fetching Categories." });
  }
};

productController.createCategory = async (req, res) => {
  const { name, description } = req.body;
  try {
    const category = await Category.create({ name, description });
    res.send({
      status: 1,
      message: "Category Created Successfully!!",
      data: category,
    });
  } catch (error) {
    res.send({
      status: 0,
      message: "Some issue while creating Category!!",
    });
  }
};

productController.updateCategory = async (req, res) => {
  const { name, description, id } = req.body;
  try {
    const [status] = await Category.update(
      { name, description },
      { where: { id } }
    );
    if (status) {
      res.send({ status: 1, message: "Category Updated Successfully." });
    } else {
      res.send({ status: 0, message: "Some issue while updating Category." });
    }
  } catch (error) {
    res.send({ status: 0, message: "Some issue while updating Category." });
  }
};

productController.deleteCategory = async (req, res) => {
  const { id } = req.body;
  try {
    const status = await Category.destroy({ where: { id } });
    if (status) {
      res.send({ status: 1, message: "Category Deleted Successfully." });
    } else {
      res.send({ status: 0, message: "Some issue while deleting Category." });
    }
  } catch (error) {
    console.log(error);
    res.send({ status: 0, message: "Some issue while deleting Category." });
  }
};

productController.getProduct = async (req, res) => {
  try {
    const products = await Products.findAll({
      attributes: {
        exclude: [
          "keepinstocktill",
          "createdby",
          "isActive",
          "createdAt",
          "updatedAt",
          "itemsold",
        ],
      },
      include: [
        {
          model: Category,
          through: ProductCategory,
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
        { model: Images },
      ],
      where: {
        isActive: 1,
        keepinstocktill: { [Op.gte]: Date.now() },
      },
    });
    res.send({ status: 1, message: "", data: products });
  } catch (error) {
    res.send({ status: 0, message: "Some issue while getting products." });
    console.log(error);
  }
};

productController.getAllProduct = async (req, res) => {
  let { page } = req.query;
  page = isNaN(page) || Number(page) <= 0 ? 1 : Number(page);
  try {
    const products = await Products.findAll({
      attributes: ["name", "offerprice", "actualprice", "productCode"],
      include: [{ model: Images }],
      order: [["id", "DESC"]],
      where: {
        isActive: 1,
        [Op.or]: [
          { keepinstocktill: { [Op.gte]: Date.now() } },
          { keepinstocktill: null },
        ],
      },
      offset: (page - 1) * 10,
      limit: 10,
    });
    res.send({ status: 1, message: "", data: products });
  } catch (error) {
    res.send({ status: 0, message: "Some issue while getting products." });
    console.log(error);
  }
};

productController.getAllProductForAdmin = async (req, res) => {
  try {
    const products = await Products.findAll({
      include: { all: true },
      order: [["id", "DESC"]],
    });
    res.send({ status: 1, message: "", data: products });
  } catch (error) {
    res.send({ status: 0, message: "Some issue while getting products." });
    console.log(error);
  }
};

productController.uploadImage = (req, res) => {
  console.log(req.files);
  res.send({ data: "images" });
};

productController.createProduct = async (req, res, next) => {
  const {
    color,
    description,
    isActive,
    itemsold,
    keepinstocktill,
    material,
    name,
    offerprice,
    productCode,
    totalstocks,
    actualprice,
  } = req.body;
  try {
    const product = await Products.create({
      actualprice,
      color,
      description,
      isActive,
      itemsold,
      keepinstocktill,
      material,
      name,
      offerprice,
      productCode,
      totalstocks,
      createdby: req.email,
    });
    if (product) {
      res.send({
        status: 1,
        message: "Product Created successfully!",
        data: product,
      });
    } else {
      res.send({
        status: 0,
        message: "Some issue while creating the product.",
      });
    }
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      res.send({
        status: 0,
        message: "Some issue while creating the product.",
        error: error.errors[0].message,
      });
    } else {
      next(error);
    }
  }
};

productController.updateProduct = async (req, res, next) => {
  const {
    id,
    actualprice,
    color,
    description,
    isActive,
    itemsold,
    keepinstocktill,
    material,
    name,
    offerprice,
    productCode,
    totalstocks,
  } = req.body;

  try {
    const [status] = await Products.update(
      {
        color,
        actualprice,
        description,
        isActive,
        itemsold,
        keepinstocktill,
        material,
        name,
        offerprice,
        productCode,
        totalstocks,
        createdby: req.email,
      },
      { where: { id } }
    );
    if (status) {
      res.send({ status: 1, message: `Product-${name} Updated Successfully.` });
    } else {
      res.send({ status: 0, message: "Some issue while updating Product." });
    }
  } catch (error) {
    next(error);
  }
};
export default productController;
