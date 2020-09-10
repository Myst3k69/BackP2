const mongoose = require('mongoose');

const UsersSchema = mongoose.Schema({

    login : {
        type : String,
        requires:true

    },
    mdp : {
        type : String,
        requires:true

    }
})

module.exports=mongoose.model('Users',UsersSchema)
