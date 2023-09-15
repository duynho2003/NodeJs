"use strict";

var express = require('express');

var multer = require('multer');

var router = express.Router();

var ProductModel = require('../models/product.model');

var storage = multer.diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, './public/images');
  },
  filename: function filename(req, file, cb) {
    var allowMineTypes = ['image/png', 'image/jpeg'];

    if (!allowMineTypes.includes(file.mimetype)) {
      var errorMessage = 'Not supported minetype';
      cb(errorMessage, null);
    } else {
      cb(null, "".concat(file.fieldname, "-").concat(Date.now(), ".jpg"));
    }
  }
});
var upload = multer({
  storage: storage
});
/* GET home page. */

router.get('/', function _callee(req, res, next) {
  var products;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(ProductModel.find());

        case 2:
          products = _context.sent;
          console.log(products);
          res.render('products/index', {
            title: 'List product',
            products: products
          });

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
});
/* GET search home page. */

router.get('/search', function _callee2(req, res, next) {
  var _req$query, min, max, products;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _req$query = req.query, min = _req$query.min, max = _req$query.max;
          console.log('min ${min} -- max ${max}');
          _context2.next = 4;
          return regeneratorRuntime.awrap(ProductModel.find());

        case 4:
          products = _context2.sent;
          console.log(products);
          res.render('products/index', {
            title: 'List product',
            products: products
          });

        case 7:
        case "end":
          return _context2.stop();
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

router.post('/create', upload.single('image'), function _callee3(req, res, next) {
  var errorMessage, newProduct;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          if (req.file) {
            _context3.next = 3;
            break;
          }

          errorMessage = "No file uploaded";
          return _context3.abrupt("return", next(errorMessage));

        case 3:
          //Save Product
          newProduct = new ProductModel({
            name: req.body.name,
            price: req.body.price,
            image: req.file.filename
          });
          _context3.next = 6;
          return regeneratorRuntime.awrap(newProduct.save());

        case 6:
          return _context3.abrupt("return", res.redirect('/products'));

        case 7:
        case "end":
          return _context3.stop();
      }
    }
  });
});
/* GET Delete page. */

router.get('/delete/:id', function _callee4(req, res, next) {
  var id;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;
          _context4.next = 3;
          return regeneratorRuntime.awrap(ProductModel.findByIdAndDelete(id));

        case 3:
          res.redirect("/products");

        case 4:
        case "end":
          return _context4.stop();
      }
    }
  });
});
module.exports = router;