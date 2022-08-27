const mongoose =require("mongoose")
const ObjectId=mongoose.Schema.Types.ObjectId

const OrderSchema = new mongoose.Schema({

    userId :{
        type:ObjectId,
        ref:"user",
    },
    productid:{
        type:ObjectId,
        ref:"product",
    },
    amount:Number,
    isFreeAppUser:{
        type:Boolean,
        default:false,
    },
    date:String,

}, { timestamps: true });

module.exports = mongoose.model('ORDER', OrderSchema) //users
