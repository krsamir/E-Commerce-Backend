import express from "express";
import transactionController from "../Controller/transactionController.js";
import { isAuthenticated } from "../MiddleWares/Authentication.js";
const router = express.Router();
router.use(isAuthenticated);
router.get("/cart", transactionController.getCart);
export default router;
