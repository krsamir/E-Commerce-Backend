const userController = {};
import User from "../Model/User.js";
import Address from "../Model/Address.js";

userController.getProfile = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { id: req.id },
      attributes: ["name", "username", "mobile"],
      include: {
        model: Address,
        attributes: { exclude: ["UserId"] },
      },
      order: [[Address, "id", "DESC"]],
    });
    if (user) {
      res.send({ status: 1, message: "Profile found.", data: user.toJSON() });
    } else {
      res.send({
        status: 0,
        message: "Some issue while getting profile for the user.",
      });
    }
  } catch (error) {
    console.log(error);
    res.send({
      status: 0,
      message: "Some issue while getting profile for the user.",
    });
  }
};

userController.setAddress = async (req, res) => {
  try {
    const user = await Address.create({ ...req.body, UserId: req.id });
    res.send({ status: 1, message: "Address Created Successfully!!", user });
  } catch (error) {
    console.log(error);
    res.send({
      status: 0,
      message: "Caught into some issue while adding address.",
    });
  }
};

userController.deleteAddress = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Address.destroy({ where: { id } });
    res.send({ status: 1, message: "Address deleted successfully.", data });
  } catch (error) {
    res.send({ status: 0, message: "Some issue while deleting the address" });
  }
};

userController.updateAddress = async (req, res) => {
  const { id } = req.body;
  delete req.body.id;
  try {
    const [data] = await Address.update({ ...req.body }, { where: { id } });
    if (data === 1) {
      res.send({ status: 1, message: "Address updated Successfully!" });
    } else {
      res.send({
        status: 0,
        message: "Some issue while updating Address!",
      });
    }
  } catch (error) {
    console.log(error);
    res.send({ status: 0, message: "Some issue while updating Address!" });
  }
};
export default userController;
