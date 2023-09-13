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
/* GET Edit page. */

router.get('/edit/:id', function _callee2(req, res, next) {
  var id, article;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          id = req.params.id;
          _context2.next = 3;
          return regeneratorRuntime.awrap(ArticleModel.findById(id));

        case 3:
          article = _context2.sent;
          console.log(article);
          res.render('articles/update', {
            title: 'Update Article',
            article: article
          });

        case 6:
        case "end":
          return _context2.stop();
      }
    }
  });
});
/*POST Edit Article. */

router.post('/edit/:id', function _callee3(req, res, next) {
  var _req$body, title, content, id, article;

  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          //findOneandUpdate
          //Update
          _req$body = req.body, title = _req$body.title, content = _req$body.content;
          id = req.params.id;
          _context3.next = 4;
          return regeneratorRuntime.awrap(ArticleModel.findById(id));

        case 4:
          article = _context3.sent;
          console.log("title: " + title);
          console.log("content: " + content);
          article.title = title;
          article.content = content;
          article.save();
          res.redirect("/articles");

        case 11:
        case "end":
          return _context3.stop();
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
  var _req$body2 = req.body,
      title = _req$body2.title,
      content = _req$body2.content;
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