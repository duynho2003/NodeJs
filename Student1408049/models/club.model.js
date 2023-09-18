const mongoose = require('mongoose');
// tao schema product
const Club = mongoose.Schema({
    name: {
        type:String,
        require:true
    },
    value: Number,
    image:String
});

module.exports = mongoose.model('Club', Club);