import express from "express";

import {
  createUser,
  loginUser,
  logoutCurrentUser,
  getCurrentUserProfile,
  getAllUsers,
  updateCurrentUserProfile,
  deleteUserById,
} from "../controller/userController.js";
import { authenticate, autorizedAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router
  .route("/")
  .post(createUser)
  .get(authenticate, autorizedAdmin, getAllUsers);

router.post("/auth", loginUser);
router.post("/logouot", logoutCurrentUser);

router
  .route("/profile")
  .get(authenticate, getCurrentUserProfile)
  .put(authenticate, updateCurrentUserProfile);

router.route("/:id").delete(authenticate, autorizedAdmin, deleteUserById);

export default router;
