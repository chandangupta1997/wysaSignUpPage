

const mongoose = require('mongoose')

const ObjectId = mongoose.Schema.Types.ObjectId


const userShema = new mongoose.Schema({

    name:{

        type:String

    },

    email:{
        type:String
    },
    password:{
        type:String
    }
    
    

})


module.exports = mongoose.model('user',userShema)