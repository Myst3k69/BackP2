let express =require('express');
let router=express.Router();


router.get("/", (req,res,next) => {res.send("API is working properly");});
router.get("/feedback", (req,res) => res.send("Thanks for your feedback"))
router.get("/feed", (req,res) => res.send("Thanks for your answer"))

module.exports=router;
