const bookModel = require("../models/bookModels")
// const {count} =require("console")
// const userbook= require("../models/bookModel")

const createBooks= async function (req, res) {
    let data= req.body
    

    let savedData= await bookModel.create(data)
// console.log(data.authorName);
    res.send({msg: savedData})
}
// --------------------------------------------------------------------------------------------------------------
const getBooksData= async function (req, res) {
    let allBooks= await bookModel.find().select({authorName:1,bookName:1,_id:0})
    res.send({msg: allBooks})
}
// ----------------------------------------------------------------------------------------------------------------------
const getBooksInYear= async function(req,res){
    let yr=req.body.yr
let allBooks= await bookModel.find({yr})
// console.log("hii", allBooks)
  res.send({msg:allBooks})
}
// -----------------------------------------------------------------------------------------------------------------------------
const getParticularBook = async function(req,res){
        let Book = req.body
        let allBooks= await bookModel.find(Book)
        res.send({msg: allBooks})
    }

// ____________________________________________________________________________________________________________________________________


let getXINRBooks = async function(req,res){
    
    let listOfBooksData = await bookModel.find( {'price.indianPrice': {$in:["100INR","200INR","500INR"]}})
    res.send({msg : listOfBooksData})
}
// -----------------------------------------------------------------------------------------------------------------------------------
let getRandomBooks = async function(req,res){

    let listOfBooksData = await bookModel.find({ $or : [{stockAvailable :true},{totalPages :{$gt:500}}]})
    res.send({msg : listOfBooksData})
}
module.exports.createBooks= createBooks
module.exports.getBooksData= getBooksData
module.exports.getBooksInYear=getBooksInYear
module.exports.getParticularBook= getParticularBook
module.exports.getXINRBooks= getXINRBooks
module.exports.getRandomBooks= getRandomBooks
