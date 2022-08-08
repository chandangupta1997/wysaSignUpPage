

const mongoose = require('mongoose ')

const ObjectId = mongoose.Schema.Types.ObjectId


const signUpSchema = new mongoose.schema({

    name:{

        type:String

    },

    email:{
        type:String
    }
    

})