"use strict";

var express = require('express');

var router = express.Router();

var ArticleModel = require('../models/article.model');
/* GET List page. */


router.get('/', function _callee(req, res, next) {
  var articles;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(ArticleModel.find());

        case 2:
          articles = _context.sent;
          console.log(articles);
          res.render('articles/index', {
            title: 'List Articles',
            articles: articles
          });

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
});
/* GET Create page. */

router.get('/create', function (req, res, next) {
  res.render('articles/create', {
    title: 'Create Article'
  });
});
/*POST Create Article. */

router.post('/create', function (req, res, next) {
  //To do: save article
  //  const title = req.body.title;
  //  const content = req.body.content;
  var _req$body = req.body,
      title = _req$body.title,
      content = _req$body.content;
  console.log("title: " + title);
  console.log("content: " + content);
  var newArticle = ArticleModel({
    title: title,
    content: content
  });
  newArticle.save();
  res.redirect("/articles");
});
module.exports = router;