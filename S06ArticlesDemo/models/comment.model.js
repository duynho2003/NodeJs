const mongoose = require('mongoose');

const Comment = new mongoose.Schema({
    content: { type: String, default: ''},
    created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Article', Article);