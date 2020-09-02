let express =require('express');
let router=express.Router();
const Post = require('../models/Post')

router.get("/", (req,res,next) => {res.send("We are on posts");});

router.post("/", (req,res) => {

console.log(req.body)

});


module.exports=router;