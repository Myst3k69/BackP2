let express =require('express');
let router=express.Router();
const Post = require('../models/Post');
const { json } = require('body-parser');
const Rating = require('../models/Rating.js')


// GET BACK ALL THE POSTS
router.get("/",  async(req,res) => {

    try {

        const posts = await Post.find();
        res.json(posts);



    }catch(err) { res.json({message : err})}

});

// SUBMIT A POST

router.post("/", async (req,res) => {

const post = new Post ({

title: req.body.title,
description : req.body.description

});

try {

const savedPost=await post.save();
res.json(savedPost);
} catch (err) { res.json({ message : err});
}

})

// SPECIFIC POST

router.get("/:postId", async (req,res) => {

try {

    const post = await Post.findById(req.params.postId);
    res.json(post);

} catch(err) { 
    
    res.json ({ message : err});

}

});

// SUBMIT A RATE

router.post("/rating", async (req,res) => {

    const rateCocktail = new Rating ({
    
    idCocktail: req.body.idCocktail,
    rate : req.body.rate
    
    });
    
    try {
    
    const savedPost=await rateCocktail.save();
    res.json(savedPost);
    } catch (err) { res.json({ message : err});
    }
    
    });


    // // GET RATING PER COCKTAIL
    router.get("/lol",  async(req,res) => {

        try {
    
            const posts = await Post.find();
            res.json(posts);
    
    
    
        }catch(err) { res.json({message : err})}
    
    });

    router.get("/feedback", (req,res) => res.send("Thanks for your feedback"));



module.exports=router;