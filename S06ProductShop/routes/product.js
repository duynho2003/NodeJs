var express = require('express');
var multer = require('multer');
var router = express.Router();

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
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Welcome to MY SHOP', name: 'Tommy'});
});

/* GET Create product. */
router.get('/create', function (req, res, next) {
    res.render('products/create', { title: 'Create new product'});
});

/* GET POST product. */
router.post('/create', upload.single('image'), function (req, res, next) {
    if (!req.file) {
        const errorMessage = "No file uploaded";
        return next(errorMessage);
    }
    //Save Product
    
    res.redirect('/products');
});

module.exports = router;