const mongoose = require('mongoose');

const RateSchema = mongoose.Schema({

    idCocktail : {
        type : String,
        requires:true

    },
    rate : {
        type : Number,
        requires:true

    }, 
    date : {
        type:Date,
        default : Date.now

    }
})

module.exports=mongoose.model('Rate',RateSchema)

