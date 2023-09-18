var express = require('express');
var multer = require('multer');
var router = express.Router();
const ClubModel = require('../models/club.model');

// upload file hinh anh
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
router.get('/', async function (req, res, next) {
    const clubs = await ClubModel.find();
    console.log(clubs);
    res.render('club/index', {
        title: 'Famous Football Clubs',
        clubs: clubs
    });
});

// /* GET View Club. */ bat lai View ko chay dc Create
// router.get('/:id', async function(req, res, next) {
//   const id = req.params.id;
//   const clubs = await ClubModel.findById(id);
//   console.log(clubs);
//   res.render('club/view', {title: 'View Famous Football Clubs', clubs: clubs });
// });

/* GET Create Club. */
router.get('/create', function(req, res, next) {
    res.render('club/create', {title: 'Create Club'});
});

/* POST Create Club. */
router.post('/create', upload.single('image'), async function(req, res, next) {
    if (!req.file) {
      const errorMessage = "No file uploaded";
      return next(errorMessage);
    }
    //Save Product
    let model = new ClubModel({
      name: req.body.name,
      value: req.body.value,
      image: req.file.filename,
    });
    await model.save();
    return res.redirect("/club");
  });

module.exports = router;