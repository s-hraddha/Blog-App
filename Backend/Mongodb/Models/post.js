const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    _id: { type: String},
    title: { type: String, required: true },
    summary: { type: String, required: true },
    detail: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('post', PostSchema);