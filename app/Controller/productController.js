import Category from "../Model/Category.js";

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
export default productController;
