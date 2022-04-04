import express from "express";
import loginController from "../Controller/loginController.js";
import rateLimit from "express-rate-limit";
const router = express.Router();
const limiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 10,
});
const limiterfor10minutes = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 5,
});
router.post("/login", loginController.login);
router.post("/admin/login", loginController.adminLogin);
router.use(limiter);
router.post("/register", loginController.register);
router.post("/verify", loginController.verification);
router.use(limiterfor10minutes);
router.post("/reset", loginController.resetPassword);
router.post("/reset/final", loginController.resetPasswordFinal);
router.post("/reset/verify", loginController.resetPasswordVerification);
export default router;
