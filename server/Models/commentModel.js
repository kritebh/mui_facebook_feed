const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    postId:{
        type:String,
        required:true
    },
    comment:{
        type:String,
        required:true
    }
})

const commentModel = mongoose.model('comment',commentSchema);
module.exports = commentModel
