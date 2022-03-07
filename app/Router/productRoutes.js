import express from "express";
import { isAuthenticated } from "../MiddleWares/Authentication.js";
import { isAdmin } from "../MiddleWares/Authorization.js";
import productController from "../Controller/productController.js";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Image Uploads
 */
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../../Images"));
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage: storage });
router.post(
  "/images",
  upload.array("images[]", 12),
  productController.uploadImage
);
router.get("/", productController.getAllProduct);
router.get("/item/:id", productController.getProduct);
router.use(isAuthenticated);

router.use(isAdmin);
router.get("/category", productController.getAllCategory);
router.post("/category", productController.createCategory);
router.put("/category", productController.updateCategory);
router.delete("/category", productController.deleteCategory);
router.get("/admin/getAllProduct", productController.getAllProductForAdmin);

export default router;
