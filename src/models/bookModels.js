const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName:{
        type:String,
        required:true
    },
    
    authorName:{
        type:String
    },
    tags: [{
        type:String
    }],
    year:{
        type:Number,
        default:2021
    },
totalPages:{
    type:Number
},
    prices: {
        indianPrice: String,
        europePrice: String
    },
stockAvailable:{
    type:Boolean
},
}, { timestamps: true });


module.exports = mongoose.model('book', bookSchema) //books