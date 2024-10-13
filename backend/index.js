//Package
import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

//Utils

import connectDB from "./config/db.js";

//Load env variables

dotenv.config();
const port = process.env.PORT || 5000;

//Connect to MongoDB

connectDB();

//Init app

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("API is Running...");
});

app.listen(port, () => console.log("Server Running on Port "));
