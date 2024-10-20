import express from "express";
import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";
import {
  addProduct,
  fetchProductById,
  removeProduct,
  updateProductDetails,
  fetchProducts,
  fetchAllProducts,
  addProductReview,
  fetchNewProducts,
  fetchTopProducts,
  filterProducts,
} from "../controller/productController.js";
import formidable from "express-formidable";
import checkId from "../middlewares/checkId.js";

const router = express.Router();

// Add product
router
  .route("/")
  .get(fetchProducts)
  .post(authenticate, authorizeAdmin, formidable(), addProduct);
// Fetch product by ID
router
  .route("/:id")
  .put(authenticate, authorizeAdmin, formidable(), updateProductDetails)
  .delete(authenticate, authorizeAdmin, removeProduct)
  .get(fetchProductById);

// Fetch all products
router.route("/allproducts").get(fetchAllProducts);
router.route("/:id/reviews").post(authenticate, checkId, addProductReview);

router.get("/top", fetchTopProducts);
router.get("/new", fetchNewProducts);
router.route("/filtered-products").post(filterProducts);

export default router;
