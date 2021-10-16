const mongoose = require("mongoose");

//schema
const ArticleSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true },
    cover: { type: String, default: "" },
    username: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Article", ArticleSchema);
