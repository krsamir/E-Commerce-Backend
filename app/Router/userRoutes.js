import express from "express";
import { isAuthenticated } from "../MiddleWares/Authentication.js";
import userController from "../Controller/userController.js";
const router = express.Router();
router.use(isAuthenticated);

router.get("/profile", userController.getProfile);

export default router;
