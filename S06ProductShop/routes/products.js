var express = require('express');
var multer = require('multer');
var router = express.Router();
const ProductModel = require('../models/product.model');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './public/images')
  },
  filename: function(req, file, cb) {
    const allowMineTypes = ['image/png', 'image/jpeg'];
    if (!allowMineTypes.includes(file.mimetype)) {
    const errorMessage = 'Not supported minetype';
    cb(errorMessage, null);
  } else {
      cb(null, `${file.fieldname}-${Date.now()}.jpg`)
    }
  }
})
  
  const upload = multer({storage: storage});

/* GET home page. */
router.get('/', async function(req, res, next) {
  const products = await ProductModel.find();
  console.log(products);
  res.render('products/index', { title: 'Welcome to MY SHOP', products: products});
});

/* GET search home page. */
router.get('/search', async function(req, res, next) {
  const { min, max } = req.query;
  console.log(`min ${min} -- max ${max}`);
  let message = undefined;
  if (min > max) {
    message = 'Min can not greater Max';
  }
  const products = await ProductModel.find().where('price').gt(min).lt(max);
  console.log(products);
  res.render('products/index', { title: 'Search', products: products, message: message});
});

/* GET Create product. */
router.get('/create', function(req, res, next) {
  res.render('products/create', { title: 'Create new product'});
});

/* POST Create product. */
router.post('/create', upload.single('image'), async function(req, res, next) {
  if (!req.file) {
    const errorMessage = "No file uploaded";
    return next(errorMessage);
  }
  //Save Product
  let model = new ProductModel({
    name: req.body.name,
    price: req.body.price,
    image: req.file.filename,
  });
  await model.save();
  return res.redirect("/products");
});

/* GET Delete page. */
router.get('/delete/:id', async function(req, res, next){
  const id = req.params.id;
  await ProductModel.findByIdAndDelete(id);
  res.redirect("/products");
});

module.exports = router;
