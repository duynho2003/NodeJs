"use strict";

var express = require('express');

var multer = require('multer');

var router = express.Router();

var ProductModel = require('../models/product.model');

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

router.get('/', function _callee(req, res, next) {
  var product;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(ProductModel.find());

        case 2:
          product = _context.sent;
          console.log(product);
          res.render('products/index', {
            title: 'List product',
            products: product
          });

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
});
/* GET Create product. */

router.get('/create', function (req, res, next) {
  res.render('products/create', {
    title: 'Create new product'
  });
});
/* POST Create product. */

router.post('/create', upload.single('image'), function (req, res, next) {
  if (!req.file) {
    var errorMessage = "No file uploaded";
    return next(errorMessage);
  } //Save Product


  var _req$body = req.body,
      name = _req$body.name,
      price = _req$body.price,
      image = _req$body.image;
  console.log("name: " + name);
  console.log("price: " + price);
  console.log("image: " + image);
  var newProduct = ProductModel({
    name: name,
    price: price,
    image: image
  });
  newProduct.save();
  res.redirect('/products');
});
/* GET Delete page. */

router.get('/delete/:id', function _callee2(req, res, next) {
  var id;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          id = req.params.id;
          _context2.next = 3;
          return regeneratorRuntime.awrap(ProductModel.findByIdAndDelete(id));

        case 3:
          res.redirect("/products");

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
});
module.exports = router;