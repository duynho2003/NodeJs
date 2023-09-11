var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('articles/index', { title: 'List Articles'});
});
/* GET home page. */
router.get('/create', function(req, res, next) {
 res.render('articles/create', {title: 'Create Article'})
});
/*POST Create Article. */
router.post('/create', function(req, res, next){
//To do: save article
 res.redirect("/articles");
});

module.exports = router;
