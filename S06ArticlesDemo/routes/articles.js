var express = require('express');
var router = express.Router();
const ArticleModel = require('../models/article.model');
const commentModel = require('../models/comment.model');

/* GET List page. */
router.get('/', async function(req, res, next) {
  const articles = await ArticleModel.find();
  console.log(articles);
  res.render('articles/index', { title: 'List Articles', articles: articles});
});

/* GET View Article. */
router.get('/:id', async function(req, res, next) {
  const id = req.params.id;
  const article = await ArticleModel.findById(id).populate('comments');
  console.log(article);
  res.render('articles/view', {title: 'View Article', article: article});
});

/* POST Article for add comment. */
router.post('/:id', async function(req, res, next) {
  const id = req.params.id;
  const commentContent = req.body.comment_content;
  const article = await ArticleModel.findById(id);
  console.log(id);
  console.log(commentContent);
  const newComment = new commentModel({ content: commentContent});
  await newComment.save();
  article.comments.push(newComment);
  await article.save();
  res.redirect('/articles/' + id);
});

/* GET Delete page. */
router.get('/delete/:id', async function(req, res, next){
  const id = req.params.id;
  await ArticleModel.findByIdAndDelete(id);
  res.redirect("/articles");
});

/* GET Edit page. */
router.get('/edit/:id', async function(req, res, next){
  const id = req.params.id;
  const article = await ArticleModel.findById(id);
  console.log(article);
  res.render('articles/update', {title: 'Update Article', article: article});
});

/*POST Edit Article. */
router.post('/edit/:id', async function(req, res, next){
  //findOneandUpdate
  //Update
  const { title, content } = req.body;
  const id = req.params.id;
  const article = await ArticleModel.findById(id);
  console.log("title: " + title);
  console.log("content: " + content);
  
  article.title = title;
  article.content = content;
   
  article.save();
  
  res.redirect("/articles");
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
