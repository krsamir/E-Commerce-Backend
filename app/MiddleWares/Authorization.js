import jwt from "jsonwebtoken";
import env from "dotenv";
import { AppConstant } from "../../Constants.js";

env.config();

export const isAdmin = (req, res, next) => {
  try {
    let token = req.header("Authorization");
    token = token.replace("Bearer ", "");
    // eslint-disable-next-line no-undef
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role === AppConstant.ROLE.ADMIN) {
      next();
    } else {
      throw Error("Unauthorized to access this page.");
    }
  } catch (e) {
    console.log({ message: "Unauthorized to access this link." });
    res.status(401).send({ message: "Unauthorized to access this link." });
  }
};
