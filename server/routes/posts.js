const express = require('express')
const postModel = require("../Models/postModel")

const router = express.Router()


router.route("/posts")
    .get(async (req, res) => {

        try{
            const data = await postModel.find({}).sort({createdAt:-1})
            res.json(data)
        }
        catch(e){
            res.sendStatus(500)
            console.log(e.message)
        }
        
    })
    .post(async (req, res) => {
        try{
            const data = await postModel.create(req.body)
            console.log(data)
            res.sendStatus(200);
        }
        catch(e){
            res.sendStatus(500)
            console.log(e.message)
        }
    })


module.exports = router
