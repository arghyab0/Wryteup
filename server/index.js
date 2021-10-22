//init server
const express = require("express");
const app = express();

//imports
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");

//routes
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const articlesRoute = require("./routes/articles");

//get mongo url
dotenv.config();

//middleware
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));

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

if (process.env.NODE.ENV === "production") {
  app.use(express.static(path.join(__dirname, "client", "build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 3080;

app.listen(port, () => console.log(`Server running at port ${port}...`));
