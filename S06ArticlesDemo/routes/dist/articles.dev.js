"use strict";

var express = require('express');

var router = express.Router();

var ArticleModel = require('../models/article.model');

var commentModel = require('../models/comment.model');
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
/* GET View Article. */

router.get('/:id', function _callee2(req, res, next) {
  var id, article;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          id = req.params.id;
          _context2.next = 3;
          return regeneratorRuntime.awrap(ArticleModel.findById(id).populate('comments'));

        case 3:
          article = _context2.sent;
          console.log(article);
          res.render('articles/view', {
            title: 'View Article',
            article: article
          });

        case 6:
        case "end":
          return _context2.stop();
      }
    }
  });
});
/* POST Article for add comment. */

router.post('/:id', function _callee3(req, res, next) {
  var id, commentContent, article, newComment;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          id = req.params.id;
          commentContent = req.body.comment_content;
          _context3.next = 4;
          return regeneratorRuntime.awrap(ArticleModel.findById(id));

        case 4:
          article = _context3.sent;
          console.log(id);
          console.log(commentContent);
          newComment = new commentModel({
            content: commentContent
          });
          _context3.next = 10;
          return regeneratorRuntime.awrap(newComment.save());

        case 10:
          article.comments.push(newComment);
          _context3.next = 13;
          return regeneratorRuntime.awrap(article.save());

        case 13:
          res.redirect('/articles/' + id);

        case 14:
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
          return regeneratorRuntime.awrap(ArticleModel.findByIdAndDelete(id));

        case 3:
          res.redirect("/articles");

        case 4:
        case "end":
          return _context4.stop();
      }
    }
  });
});
/* GET Edit page. */

router.get('/edit/:id', function _callee5(req, res, next) {
  var id, article;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          id = req.params.id;
          _context5.next = 3;
          return regeneratorRuntime.awrap(ArticleModel.findById(id));

        case 3:
          article = _context5.sent;
          console.log(article);
          res.render('articles/update', {
            title: 'Update Article',
            article: article
          });

        case 6:
        case "end":
          return _context5.stop();
      }
    }
  });
});
/*POST Edit Article. */

router.post('/edit/:id', function _callee6(req, res, next) {
  var _req$body, title, content, id, article;

  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          //findOneandUpdate
          //Update
          _req$body = req.body, title = _req$body.title, content = _req$body.content;
          id = req.params.id;
          _context6.next = 4;
          return regeneratorRuntime.awrap(ArticleModel.findById(id));

        case 4:
          article = _context6.sent;
          console.log("title: " + title);
          console.log("content: " + content);
          article.title = title;
          article.content = content;
          article.save();
          res.redirect("/articles");

        case 11:
        case "end":
          return _context6.stop();
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