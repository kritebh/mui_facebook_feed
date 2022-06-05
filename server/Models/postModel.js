const mongoose = require('mongoose')

const postsSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    createdAt:{
        type:String,
        required:true,
        default:Date.now()
    }
})

const postsModel = mongoose.model('posts',postsSchema);
module.exports = postsModel
