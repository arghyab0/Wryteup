//init server
const express = require("express");
const app = express();

//imports
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const multer = require("multer");

//routes
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const articlesRoute = require("./routes/articles");

//get mongo url
dotenv.config();

//json middleware
app.use(express.json());

//mongoose connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("Connected to MongoDB."))
  .catch((err) => console.log(err));

//images
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "images"),
  filename: (req, file, cb) => cb(null, req.body.name),
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded.");
});

//using routes
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/articles", articlesRoute);

app.listen("3080", () => console.log("Server running at port 3080..."));
