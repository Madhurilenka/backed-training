const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    name: String,
    balance:{
        type:Number,
        default:100,
    },
   
    age: Number,
    gender: {
        type: String,
        enum: ["male", "female", "Other"] //"falana" will give an error
    },
    
   
}, { timestamps: true });

module.exports = mongoose.model('Userids', userSchema) //users



