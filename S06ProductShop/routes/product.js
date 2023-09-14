var express = require('express');
var multer = require('multer');
var router = express.Router();
const ProductModel = require('../models/product.model');

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'public/images')
    },
    filename: function(req, file, cb){
        const allowMineTypes = ['image/png', 'image/jpg']
        if (!allowMineTypes.includes(file.mimetype)) {
            const errorMessage = 'Not supported minetype';
            cb(errorMessage, null);
        } else {
            cb(null, '${file.filename}-${Date.now}.${file.mimetype}')
        }
    }
});

const upload = multer({storage: storage});

/* GET home page. */
router.get('/', async function(req, res, next) {
    const product = await ProductModel.find();
    console.log(product);
    res.render('products/index', { title: 'List product', products: product});
});

/* GET Create product. */
router.get('/create', function (req, res, next) {
    res.render('products/create', { title: 'Create new product'});
});

/* POST Create product. */
router.post('/create', upload.single('image'), function (req, res, next) {
    if (!req.file) {
        const errorMessage = "No file uploaded";
        return next(errorMessage);
    }
    //Save Product
    const { name, price, image } = req.body;
    console.log("name: " + name);
    console.log("price: " + price);
    console.log("image: " + image);

    let newProduct = ProductModel({
    name: name,
    price: price,
    image: image
 });
 newProduct.save();
res.redirect('/products');
});

/* GET Delete page. */
router.get('/delete/:id', async function(req, res, next){
    const id = req.params.id;
    await ProductModel.findByIdAndDelete(id);
    res.redirect("/products");
});

module.exports = router;