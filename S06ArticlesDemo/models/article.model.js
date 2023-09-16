const mongoose = require("mongoose");

const Article = new mongoose.Schema({
  title: { type: String, default: "", require: true },
  content: { type: String, default: "" },
  comments: [{ type: mongoose.ObjectId, ref: "Comment" }],
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Article', Article);