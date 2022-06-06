require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')


//Middleware
app.use(express.json())
app.use(cors())


//Database Connection
mongoose.connect(process.env.MONGODB_URL,()=>{
    console.log("Database Connected")
})


//Starting The Server
const port = process.env.PORT || 8000
app.listen(port,()=>{
    console.log(`Server is running at ${port}`)
})


//API endpoints

/********** Posts Routes **********/
const posts = require("./routes/posts")
app.use(posts)

/********** Comments Routes **********/

const comments = require("./routes/comments")
app.use(comments)
