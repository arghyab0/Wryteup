//init server
const express = require("express");
const app = express();

//get mongo url
const dotenv = require("dotenv");
dotenv.config();

//mongoose connection
const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.listen("5000", () => console.log("server is running at port 5000..."));
