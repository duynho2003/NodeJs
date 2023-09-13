"use strict";

var express = require('express');

var multer = require('multer');

var router = express.Router();
var storage = multer.diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, 'public/images');
  },
  filename: function filename(req, file, cb) {
    var allowMineTypes = ['image/png', 'image/jpg'];

    if (!allowMineTypes.includes(file.mimetype)) {
      var errorMessage = 'Not supported minetype';
      cb(errorMessage, null);
    } else {
      cb(null, '${file.filename}-${Date.now}.${file.mimetype}');
    }
  }
});
var upload = multer({
  storage: storage
});
/* GET home page. */

router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Welcome to MY SHOP',
    name: 'Tommy'
  });
});
/* GET Create product. */

router.get('/create', function (req, res, next) {
  res.render('products/create', {
    title: 'Create new product'
  });
});
/* GET POST product. */

router.post('/create', upload.single('image'), function (req, res, next) {
  if (!req.file) {
    var errorMessage = "No file uploaded";
    return next(errorMessage);
  } //Save Product


  res.redirect('/products');
});
module.exports = router;