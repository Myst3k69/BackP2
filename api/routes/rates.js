let express =require('express');
let router=express.Router();
const Post = require('../models/Post');
const { json } = require('body-parser');
const Rating = require('../models/Rating.js')



// GET RATING PER ID

// SPECIFIC POST

router.get("/test/:id", async (req,res) => {

    try {
    
        const post = await Rating.findById(req.params.id);
        res.json(post);
    
    } catch(err) { 
        
        res.json ({ message : err});
    
    }
    
    });


// GET RATING AVERAGE

router.get("/",  async(req,res) => {

    
    

    try {

       

        const avg= await Rating.aggregate([{$group: {_id: "$idCocktail", average:{$avg:"$rate"}}}])
      
        
        
        res.json(avg);



    }catch(err) { res.json({message : err})}

});



 // // GET RATING PER COCKTAIL

 const query = {_id: 0}
 const options = {

    sort : { rate:-1},

    projection : { rate:1, idCocktail:1 },

 }

 
    router.get("/:cocktail",  async(req,res) => {

        const id= req.params.cocktail;
        

        try {
    
            // const posts = await Rating.find({rate: {$gte:3}});
            // res.json(posts);

            const avg= await Rating.aggregate([{$group: {_id: "$idCocktail", average:{$avg:"$rate"}}}])
            const resultat = await Rating.find({"idCocktail" : "15427"})
            const testavg= await resultat.aggregate([{$group: {_id: "$idCocktail", average:{$avg:"$rate"}}}])
            
            res.json(resultat)
            //res.json(resultat);
            //res.json(avg);
    
    
    
        }catch(err) { res.json({message : err})}
    
    });



router.get("/feedback", (req,res) => res.send("Thanks for your feedback"));



module.exports=router;