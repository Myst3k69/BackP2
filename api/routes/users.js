let express = require("express");
let router = express.Router();

const { json } = require("body-parser");
const User = require("../models/Users");


// SUBMIT A RATE

router.post("/", async (req, res) => {

    const setUser = new User({
      login: req.body.login,
      mdp: req.body.mdp,
    });
  
    try {
      const savedPost = await setUser.save();
      res.json(savedPost);
    } catch (err) {
      res.json({ message: err });
    }
  });