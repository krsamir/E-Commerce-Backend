import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../Model/User.js";
import Admin from "../Model/Admin.js";
import moment from "moment";
import Sequelize from "sequelize";
import env from "dotenv";
import { AppConstant } from "../../Constants.js";
import Email from "../../Email/email.js";
import sequelize from "../Database.js";
import Parties from "../Model/Parties.js";
import Role from "../Model/Role.js";
env.config();
const loginController = {};
// eslint-disable-next-line no-undef
const { JWT_SECRET, JWT_EXPIRATION_TIME } = process.env;
loginController.register = async (req, res) => {
  const { name, username, mobile, password } = req.body;
  var salt = bcryptjs.genSaltSync(10);
  var hashedPassword = bcryptjs.hashSync(password, salt);
  const token = Math.random().toString().substring(2, 8);
  const validTill = moment().add(10, "minute").format("YYYY-MM-DD HH:mm:ss");
  try {
    const t = await sequelize.transaction();
    await User.create(
      {
        name,
        username,
        password: hashedPassword,
        mobile,
        isActive: false,
        token,
        validTill,
      },
      { transaction: t }
    );
    const emailObject = { name, recipient: username, token, validTill };
    Email.registerMail(emailObject, async (data) => {
      if (data === 1) {
        await t.commit();
        res.send({
          status: 1,
          message:
            "An OTP has been sent to the registered email. Please verify before it expires.",
        });
      } else {
        await t.rollback();
        res.status(500).send({
          status: 0,
          message: "Some issue while Sending Mail.",
          reason: "Mail not Sent",
        });
      }
    });
  } catch (error) {
    if (error instanceof Sequelize.BaseError) {
      res.status(500).send({
        status: 0,
        message: "Some issue while registering user.",
        reason: error.errors.map((error) => error.message),
      });
    } else {
      res.status(500).send({
        status: 0,
        message: "Some issue while registering user.",
        reason: error,
      });
    }
  }
};

loginController.verification = async (req, res) => {
  const { username, token } = req.body;
  try {
    const user = await User.findOne({
      where: { username, token },
      attributes: ["validTill", "username", "id"],
    });
    if (user) {
      const data = user.toJSON();
      const expiry = moment(data.validTill);
      if (moment().isSameOrBefore(moment(expiry))) {
        await User.update(
          { isActive: true, token: null },
          {
            where: { username, token },
          }
        );
        const jwtToken = jwt.sign(
          { id: data.id, email: data.username, role: AppConstant.ROLE.USER },
          JWT_SECRET,
          {
            expiresIn: JWT_EXPIRATION_TIME,
          }
        );
        res.send({
          status: 1,
          message: "accepted",
          token: jwtToken,
          rid: AppConstant.ROLE.USER,
        });
      } else {
        res.send({ status: 0, message: "Token expired !!" });
      }
    } else {
      res.send({ status: 0, message: "Invalid Request!" });
    }
  } catch (error) {
    console.log(error);
    res.send({ status: 0, message: "Some issue with the request." });
  }
};
loginController.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({
      where: { username: email },
    });
    if (user) {
      const data = user.toJSON();
      if (data.isActive) {
        if (data.invalidLogins <= 0) {
          res.send({
            status: 0,
            message:
              "Your account is temprorarly blocked due to multiple invalid logins. Please reset your password.",
          });
        } else {
          const hashedPassword = data.password;
          const ismatched = bcryptjs.compareSync(
            password,
            hashedPassword ? hashedPassword : ""
          );
          if (ismatched) {
            await User.update(
              { lastLogin: moment(), invalidLogins: 5 },
              {
                where: { id: data.id },
              }
            );
            const jwtToken = jwt.sign(
              {
                id: data.id,
                email: data.username,
                role: AppConstant.ROLE.USER,
              },
              JWT_SECRET,
              {
                expiresIn: JWT_EXPIRATION_TIME,
              }
            );
            res.send({
              status: 1,
              message: "Authenticated!!",
              token: jwtToken,
              rid: AppConstant.ROLE.USER,
            });
          } else {
            await User.increment(
              { invalidLogins: -1 },
              {
                where: { id: data.id },
              }
            );
            res.send({ status: 0, message: "Invalid Credentials" });
          }
        }
      } else {
        res.send({
          status: 0,
          message:
            "Please activate your account first. If token has expired reset your password.",
        });
      }
    } else {
      res.send({ status: 0, message: "Invalid Credentials" });
    }
  } catch (error) {
    console.log(error);
    res.send({ status: 0, message: "Some Issue while logging in." });
  }
};

loginController.resetPassword = async (req, res) => {
  const { email } = req.body;
  const token = Math.random().toString().substring(2, 8);
  const validTill = moment().add(10, "minute").format("YYYY-MM-DD HH:mm:ss");
  try {
    const t = await sequelize.transaction();
    const [value] = await User.update(
      { token, validTill, isActive: false, invalidLogins: 5, password: null },
      {
        where: { username: email },
      },
      { transaction: t }
    );
    if (value === 1) {
      const emailObject = { recipient: email, token, validTill };
      Email.forgotPassword(emailObject, async (data) => {
        if (data === 1) {
          await t.commit();
          res.send({ status: 1, message: "OTP has been sent to your email." });
        } else {
          await t.rollback();
          res.send({
            status: 0,
            message: "Some issue while Sending Mail.",
            reason: "Mail not Sent",
          });
        }
      });
    } else {
      res.send({ status: 0, message: "Please register with us first." });
    }
  } catch (error) {
    console.log(error);
    res.send({ status: 0, message: "Some issue while performing actions." });
  }
};

loginController.resetPasswordFinal = async (req, res) => {
  const { email, password, token } = req.body;
  try {
    var salt = bcryptjs.genSaltSync(10);
    var hashedPassword = bcryptjs.hashSync(password, salt);
    const [value] = await User.update(
      {
        isActive: true,
        invalidLogins: 5,
        password: hashedPassword,
        token: null,
      },
      {
        where: { username: email, token },
      }
    );
    if (value === 1) {
      res.send({ status: 1, message: "Password Updated Successfully." });
    } else {
      res.send({ status: 0, message: "Some issue while changing password." });
    }
  } catch (error) {
    console.log(error);
    res.send({ status: 0, message: "Some issue while performing actions." });
  }
};

loginController.resetPasswordVerification = async (req, res) => {
  const { username, token } = req.body;
  try {
    const user = await User.findOne({
      where: { username, token },
      attributes: ["validTill", "username", "id"],
    });
    if (user) {
      const data = user.toJSON();
      const expiry = moment(data.validTill);
      if (moment().isSameOrBefore(moment(expiry))) {
        res.send({ status: 1, message: "accepted" });
      } else {
        res.send({ status: 0, message: "Token expired !!" });
      }
    } else {
      res.send({ status: 0, message: "Invalid Request!" });
    }
  } catch (error) {
    console.log(error);
    res.send({ status: 0, message: "Some issue with the request." });
  }
};

loginController.adminLogin = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const admin = await Admin.findOne({
      where: { username },
      include: [Parties, Role],
    });
    if (admin) {
      const data = admin.toJSON();
      const isMatched = bcryptjs.compareSync(
        password,
        data.password ? data.password : ""
      );
      if (data.isActive) {
        if (isMatched) {
          await Admin.update(
            { lastLogin: moment() },
            {
              where: { id: data.id },
            }
          );
          const jwtToken = jwt.sign(
            {
              id: data.id,
              email: data.username,
              role: AppConstant.ROLE.ADMIN,
            },
            JWT_SECRET,
            {
              expiresIn: JWT_EXPIRATION_TIME,
            }
          );
          res.send({
            status: 1,
            message: "Authenticated!!",
            token: jwtToken,
            rid: AppConstant.ROLE.ADMIN,
          });
        } else {
          res.send({ status: 0, message: "Invalid Credentials" });
        }
      } else {
        res.send({
          status: 0,
          message: "Please contact Admin and Active your account",
        });
      }
    } else {
      res.send({ status: 0, message: "Invalid Credentials" });
    }
  } catch (e) {
    next(e);
  }
};
export default loginController;
