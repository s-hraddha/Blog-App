const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
    postId: { type: mongoose.Schema.Types.ObjectId, ref: 'post', required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    username:{type:String, required:true},
    comment: { type: String, required: true },
    commentAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Comment', CommentSchema);