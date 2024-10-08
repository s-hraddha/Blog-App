const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    title: { type: String, required: true },
    summary: { type: String, required: true },
    detail: { type: String, required: true },
    createdBy: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('post', PostSchema);