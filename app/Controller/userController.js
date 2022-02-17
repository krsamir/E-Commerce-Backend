const userController = {};
import User from "../Model/User.js";
import Address from "../Model/Address.js";

userController.getProfile = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { id: req.id },
      attributes: ["name", "username", "mobile"],
      include: { model: Address, attributes: { exclude: ["UserId"] } },
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
export default userController;
