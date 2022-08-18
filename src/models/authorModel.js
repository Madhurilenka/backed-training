const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema( {
    author_id:{
        type:Number,
        required:true
    },
    author_name:"string",
    age:Number,
    address:"string",
},
{ timestamps: true });
module.exports = mongoose.model('authors', authorSchema)