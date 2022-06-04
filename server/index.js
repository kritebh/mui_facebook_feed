require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')


//Middleware
app.use(express.json())
app.use(cors())

//Importing Models
const commentModel = require("./Models/commentModel")
const postModel = require("./Models/postModel")


//Database Connection
mongoose.connect(process.env.MONGODB_URL)


//Starting The Server

const port = process.env.PORT || 8000
app.listen(port,()=>{
    console.log(`Server is running at ${port}`)
})




//API endpoints

app.get("/posts",(req,res)=>{
    postModel.find({}).then(data=>{
        res.json(data)
    })
})


app.post("/posts",(req,res)=>{
    postModel.create(req.body).then(data=>{
        res.json(data)
    })
})


app.get("/getcomment/:id",(req,res)=>{

    commentModel.find({postId:req.params.id}).then(data=>{
        res.json(data)
    })

})

app.post("/addcomment",(req,res)=>{


    commentModel.create(req.body).then(data=>{
        res.json(data)
    })

})

