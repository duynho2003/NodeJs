const mongoose = require('mongoose');
// taoj schema product
const Product = mongoose.Schema({
    name:{
        type:String,
        require:true    
    },
    price:Number,
    image:String
});

module.exports = mongoose.model('Product', Product);