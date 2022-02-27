import express from "express";
import { isAuthenticated } from "../MiddleWares/Authentication.js";
import { isAdmin } from "../MiddleWares/Authorization.js";
import productController from "../Controller/productController.js";
const router = express.Router();

router.get("/", productController.getAllProduct);
router.get("/:id", productController.getProduct);
router.use(isAuthenticated);

router.use(isAdmin);
router.get("/category", productController.getAllCategory);
router.post("/category", productController.createCategory);
router.put("/category", productController.updateCategory);
router.delete("/category", productController.deleteCategory);

export default router;
