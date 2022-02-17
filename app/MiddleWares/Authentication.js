import jwt from "jsonwebtoken";
import env from "dotenv";
env.config();

export const isAuthenticated = (req, res, next) => {
  try {
    let token = req.header("Authorization");
    token = token.replace("Bearer ", "");
    // eslint-disable-next-line no-undef
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.id = decoded.id;
    req.email = decoded.email;
    req.role = decoded.role;
    next();
  } catch (e) {
    console.log({ error: "Authentication Required. Please login again." });
    res
      .status(401)
      .send({ error: "Authentication Required. Please login again." });
  }
};
