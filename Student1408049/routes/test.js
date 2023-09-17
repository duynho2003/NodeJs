var express = require('express');
var router = express.Router();
const TestModel = require('../models/test.model');

/* GET home page. */
router.get('/', async function (req, res, next) {
    const test = await TestModel.find();
    console.log(test);
    res.render('test/index', {
        title: 'Welcome to my exam',
        test: test
    });
});

module.exports = router;