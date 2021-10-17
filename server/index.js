//init server
const express = require("express");
const app = express();

//imports
const dotenv = require("dotenv");
const mongoose = require("mongoose");

//routes
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const aticlesRoute = require("./routes/articles");

//get mongo url
dotenv.config();

app.use(express.json());

//mongoose connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/articles", aticlesRoute);

app.listen("5000", () => console.log("server is running at port 5000..."));
