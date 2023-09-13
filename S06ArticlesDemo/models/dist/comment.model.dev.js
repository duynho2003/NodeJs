"use strict";

var mongoose = require("mongoose");

var Comment = new mongoose.Schema({
  content: {
    type: String,
    "default": ""
  },
  created_at: {
    type: Date,
    "default": Date.now
  }
});
module.exports = mongoose.model('Comment', Comment);