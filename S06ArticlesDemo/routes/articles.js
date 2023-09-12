var express = require('express');
var router = express.Router();
const ArticleModel = require('../models/article.model');

/* GET List page. */
router.get('/', async function(req, res, next) {
  const articles = await ArticleModel.find();
  console.log(articles);
  res.render('articles/index', { title: 'List Articles', articles: articles});
});
/* GET Create page. */
router.get('/create', function(req, res, next) {
 res.render('articles/create', {title: 'Create Article'})
});
/*POST Create Article. */
router.post('/create', function(req, res, next){
//To do: save article
//  const title = req.body.title;
//  const content = req.body.content;
 const { title, content } = req.body;

 console.log("title: " + title);
 console.log("content: " + content);

 let newArticle = ArticleModel({
  title: title,
  content: content
 });
 newArticle.save();

 res.redirect("/articles");
});

module.exports = router;
