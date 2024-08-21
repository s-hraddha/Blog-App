const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    title:{type: String, required:true},
    summary:{type: String, required:true},
    detail:{type:String, required:true},
    createdAt:{type:String, default:Date.now}
});

module.exports = mongoose.model('post', PostSchema);