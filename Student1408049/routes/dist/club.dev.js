"use strict";

var express = require('express');

var multer = require('multer');

var router = express.Router();

var ClubModel = require('../models/club.model'); // upload file hinh anh


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
  var clubs;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(ClubModel.find());

        case 2:
          clubs = _context.sent;
          console.log(clubs);
          res.render('club/index', {
            title: 'Famous Football Clubs',
            clubs: clubs
          });

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
}); // /* GET View Club. */ bat lai View ko chay dc Create
// router.get('/:id', async function(req, res, next) {
//   const id = req.params.id;
//   const clubs = await ClubModel.findById(id);
//   console.log(clubs);
//   res.render('club/view', {title: 'View Famous Football Clubs', clubs: clubs });
// });

/* GET Create Club. */

router.get('/create', function (req, res, next) {
  res.render('club/create', {
    title: 'Create Club'
  });
});
/* POST Create Club. */

router.post('/create', upload.single('image'), function _callee2(req, res, next) {
  var errorMessage, model;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          if (req.file) {
            _context2.next = 3;
            break;
          }

          errorMessage = "No file uploaded";
          return _context2.abrupt("return", next(errorMessage));

        case 3:
          //Save Product
          model = new ClubModel({
            name: req.body.name,
            value: req.body.value,
            image: req.file.filename
          });
          _context2.next = 6;
          return regeneratorRuntime.awrap(model.save());

        case 6:
          return _context2.abrupt("return", res.redirect("/club"));

        case 7:
        case "end":
          return _context2.stop();
      }
    }
  });
});
module.exports = router;