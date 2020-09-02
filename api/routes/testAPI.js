let express =require('express');
let router=express.Router();


router.get("/", (req,res,next) => {res.send("API is working properly");});
router.get("/feedback", (req,res) => res.send("Thanks for your feedback"))

module.exports=router;
