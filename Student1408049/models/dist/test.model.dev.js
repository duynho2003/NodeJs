"use strict";

var mongoose = require('mongoose'); // tao schema product


var Test = mongoose.Schema({});
module.exports = mongoose.model('Test', Test);