const express = require('express')
const commentModel = require("../Models/commentModel")

const router = express.Router()


router.get("/getcomment/:id", async (req, res) => {

    try {
        const data = await commentModel.find({ postId: req.params.id })
        res.json(data)
    }
    catch (e) {
        res.sendStatus(500)
        console.log(e.message)
    }

})

router.post("/addcomment", async (req, res) => {

    try {
        const data = await commentModel.create(req.body)
        console.log(data)
        res.sendStatus(200);
    }
    catch (e) {
        res.sendStatus(500)
        console.log(e.message)
    }

})


module.exports = router