let express = require("express");
let router = express.Router();

const { json } = require("body-parser");
const Rating = require("../models/Rating.js");

// SUBMIT A RATE

router.post("/", async (req, res) => {

  const rateCocktail = new Rating({
    idCocktail: req.body.idCocktail,
    rate: req.body.rate,
  });

  try {
    const savedPost = await rateCocktail.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});




// SPECIFIC POST

router.get("/test/:id", async (req, res) => {
  try {
    const post = await Rating.findById(req.params.id);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

// GET RATING AVERAGE

router.get("/", async (req, res) => {

  const response = {

avg:[],
nbRates:"NAN"

  }
  try {

    
    response.avg = await Rating.aggregate([
      { $group: { _id: "$idCocktail", average: { $avg: "$rate" } } }
    ])
     
    response.nbRates= await Rating.aggregate([
      { $group: { _id: "$idCocktail", NbRates: { $sum: 1 } } }
       
    ]);
    res.json(response);

    
  } catch (err) {
    res.json({ message: err });
  }
});

// // GET RATING PER COCKTAIL

const query = { _id: 0 };
const options = {
  sort: { rate: -1 },

  projection: { rate: 1, idCocktail: 1 },
};

router.get("/:cocktail", async (req, res) => {
  const id = req.params.cocktail;

  try {
   

    const avg = await Rating.aggregate([
      { $group: { _id: "$idCocktail", average: { $avg: "$rate" } } },
    ]);
    const resultat = await Rating.find({ idCocktail: "15427" });
    const testavg = await resultat.aggregate([
      { $group: { _id: "$idCocktail", average: { $avg: "$rate" } } },
    ]);

    res.json(resultat);
    
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
