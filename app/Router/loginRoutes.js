import express from "express";
import loginController from "../Controller/loginController.js";
import rateLimit from "express-rate-limit";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
const { JWT_SECRET, JWT_EXPIRATION_TIME, FRONTENDLINK } = process.env;
const router = express.Router();
const limiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 10,
});

router.get("/login", loginController.login);
router.use(limiter);
router.get("/register", loginController.register);
router.get("/verify", loginController.verification);
router.get("/reset", loginController.resetPassword);
router.get("/reset/final", loginController.resetPasswordFinal);
export default router;
