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
            title: 'Welcome to MY SHOP',
            products: products
          });

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
});
/* GET View Product. */
// router.get('/:id', async function(req, res, next) {
//   const id = req.params.id;
//   const products = await ProductModel.findById(id);
//   console.log(products);
//   res.render('products/view', {title: 'View Products', products: products });
// });

/* GET search home page. */

router.get('/search', function _callee2(req, res, next) {
  var _req$query, min, max, message, products;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _req$query = req.query, min = _req$query.min, max = _req$query.max;
          console.log("min ".concat(min, " -- max ").concat(max));
          message = undefined;

          if (min > max) {
            message = 'Min can not greater Max';
          }

          _context2.next = 6;
          return regeneratorRuntime.awrap(ProductModel.find().where('price').gt(min).lt(max));

        case 6:
          products = _context2.sent;
          console.log(products);
          res.render('products/index', {
            title: 'Search',
            products: products,
            message: message
          });

        case 9:
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
  var errorMessage, model;
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
          model = new ProductModel({
            name: req.body.name,
            price: req.body.price,
            image: req.file.filename
          });
          _context3.next = 6;
          return regeneratorRuntime.awrap(model.save());

        case 6:
          return _context3.abrupt("return", res.redirect("/products"));

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
/* GET Edit Product. */

router.get('/edit/:id', function _callee5(req, res, next) {
  var id, products;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          id = req.params.id;
          _context5.next = 3;
          return regeneratorRuntime.awrap(ProductModel.findById(id));

        case 3:
          products = _context5.sent;
          console.log(products);
          res.render('products/update', {
            title: 'Update Product',
            products: products
          });

        case 6:
        case "end":
          return _context5.stop();
      }
    }
  });
});
/* POST EDIT Product. */

router.post('/edit/:id', upload.single('image'), function _callee6(req, res, next) {
  var errorMessage, model;
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          if (req.file) {
            _context6.next = 3;
            break;
          }

          errorMessage = "No file uploaded";
          return _context6.abrupt("return", next(errorMessage));

        case 3:
          _context6.next = 5;
          return regeneratorRuntime.awrap(ProductModel.findById(req.params.id));

        case 5:
          model = _context6.sent;
          model.name = req.body.name;
          model.price = req.body.price;
          model.image = req.file.filename;
          _context6.next = 11;
          return regeneratorRuntime.awrap(model.save());

        case 11:
          return _context6.abrupt("return", res.redirect("/products"));

        case 12:
        case "end":
          return _context6.stop();
      }
    }
  });
});
module.exports = router;