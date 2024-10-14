import asyncHandler from "./asyncHandler.js";
import User from "../models/userModel.js";
import jwt from "jsonwebtoken";

const authenticate = asyncHandler(async (req, res, next) => {
  //Read the JWT fron 'jwt ' cookie
  token = req.cookies.jwt;

  if (token) {
    try {
      const docoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(docoded.userId).select("-password");
      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  } else {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

const autorizedAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401).send("Unauthorized, not an admin");
  }
};

export { authenticate, autorizedAdmin };
