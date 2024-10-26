import express from "express";
import { createOrder } from "../controller/orderController.js";
import { authenticate } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/").post(authenticate, createOrder);

export default router;
