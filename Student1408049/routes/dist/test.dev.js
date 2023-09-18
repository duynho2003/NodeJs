"use strict";

var express = require('express');

var router = express.Router();

var TestModel = require('../models/club.model');
/* GET home page. */


router.get('/', function _callee(req, res, next) {
  var test;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(TestModel.find());

        case 2:
          test = _context.sent;
          console.log(test);
          res.render('test/index', {
            title: 'Welcome to my exam',
            test: test
          });

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
});
module.exports = router;