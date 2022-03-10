import Category from "../Model/Category.js";
import Images from "../Model/Images.js";
import Products from "../Model/Product.js";
import ProductCategory from "../Model/ProductCategory.js";
import { AppConstant } from "../../Constants.js";
import { Op } from "sequelize";
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

const productController = {};
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
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

productController.getAllProductbyPage = async (req, res) => {
  let { page } = req.query;
  page = isNaN(page) || Number(page) <= 0 ? 1 : Number(page);
  try {
    const products = await Products.findAll({
      attributes: ["name", "offerprice", "actualprice", "productCode"],
      include: [
        {
          model: Images,
          attributes: ["filename", "filetype"],
          required: false,
          where: {
            category: AppConstant.CATEGORIES.PROFILE,
          },
        },
      ],
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

    const parsedProduct = JSON.parse(JSON.stringify(products));
    const mappedProduct = parsedProduct.map((val) => {
      return {
        ...val,
        Images: val.Images.map((val) => {
          try {
            const fileData = fs.readFileSync(
              `${path.join(__dirname, "../../Images/", val.filename)}`,
              "base64"
            );
            return { file: val.filename, data: fileData };
          } catch (error) {
            return { file: null, data: null };
          }
        }),
      };
    });
    res.send({ status: 1, message: "", data: mappedProduct });
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

productController.uploadImage = async (req, res, next) => {
  const files = req.files;
  const data = JSON.parse(JSON.stringify(req.body));
  const { ProductId } = data;
  if (files.length === 0) {
    res.send({ status: 0, message: "No files to upload" });
  } else {
    try {
      const finalFileObject = files.map(({ filename, size, mimetype }) => ({
        filename,
        filetype: mimetype,
        size,
        category: AppConstant.CATEGORIES.ALL,
        ProductId,
      }));
      const createdData = await Images.bulkCreate(finalFileObject);

      res.send({
        status: 1,
        message: "Image uploaded successfully!!",
        data: createdData,
      });
    } catch (error) {
      next(error);
    }
  }
};

productController.createProduct = async (req, res, next) => {
  const {
    color,
    description,
    isActive,
    keepinstocktill,
    material,
    name,
    offerprice,
    totalstocks,
    actualprice,
  } = req.body;
  try {
    const productCode = Math.random().toString(36).slice(2);
    const product = await Products.create({
      actualprice,
      color,
      description,
      isActive,
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

productController.createProductCategory = async (req, res, next) => {
  const { ProductId, CategoryId } = req.body;
  try {
    const data = await ProductCategory.create({ ProductId, CategoryId });
    if (data) {
      res.send({
        status: 1,
        message: `Product added to category successfully.`,
      });
    } else {
      res.send({
        status: 0,
        message: `Some issue while adding the product to this category.`,
      });
    }
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      res.send({
        status: 0,
        message: `Product has been already added into this Category.`,
      });
    } else {
      next(error);
    }
  }
};

productController.deleteProductCategory = async (req, res, next) => {
  const { ProductId, CategoryId } = req.body;
  try {
    const data = await ProductCategory.destroy({
      where: { ProductId, CategoryId },
    });
    if (data > 0) {
      res.send({ status: 1, message: "Category deleted successfully." });
    } else {
      res.send({
        status: 1,
        message: "Some issue while deleting category for this product",
      });
    }
  } catch (error) {
    next(error);
  }
};

productController.getImagesById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const data = await Products.findAll({ where: { id }, include: "Images" });
    const image = JSON.parse(JSON.stringify(data));
    const mappedImage = image.map((val) => {
      return {
        ...val,
        Images: val.Images.map((val) => {
          try {
            const fileData = fs.readFileSync(
              `${path.join(__dirname, "../../Images/", val.filename)}`,
              "base64"
            );
            return { file: val.filename, data: fileData };
          } catch (error) {
            return { file: val.filename, data: null };
          }
        }),
      };
    });
    res.send({ images: "", data: mappedImage });
  } catch (error) {
    next(error);
  }
};
export default productController;
