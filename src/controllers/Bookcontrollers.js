const bookModel= require("../models/bookModel")
const authorModel= require("../models/authorModel")


const createBooks= async function (req, res) {
    let data= req.body
    
    let savedData= await bookModel.create(data)

    res.send({msg: savedData})
}


const createauthors= async function (req, res) {
    let data=req.body
    let authors= await authorModel.create(data)
    res.send({msg: authors})
}
// ________________________________________________________________________


 const getBookData=async function(req,res) {
     let allids = await bookModel.find({author_id:4}    )
console.log(allids)
     if(allids.length>0) res.send({msg:allids,condition:true})
     else res.send({msg:"do not find id",condition:false})
 }



// ____________________________________________________________________________________ 

 const getIdByauthor = async function(req, res){
    // const { author_name } = req.body;
    let savedData = await authorModel.find({author_name:"Chetan Bhagat"}).select({_id:0,author_id:1})
    let innerArray =savedData[0]
    let data =await bookModel.find(innerArray)
    res.send({msg:data})
}
// _____________________________________________________________________________________________________
const findAndUpdate = async function(req, res){
    // const bookName = 'Two states';
    let input=req.body
    let findBook = await bookModel.findOneAndUpdate({bookName:"Two states"},{$set:input} ,{new: true})

    let abc = findBook.author_id
    let findauthor = await authorModel.find({author_id:abc}).select({author_name:1,_id:0})
    res.send({msg:findauthor})
}
// ___________________________________________________________________________________________________________


const bookAndauthor = async function (req, res){
    let allids = await bookModel.find({prices: {$gte: 50, $lte: 100}}).select({author_id: 1, _id: 0})
    let id = allids.map(ids => ids.author_id)
     let allauthorname = await authorModel.find({author_id: id}).select({author_name: 1, _id: 0})
    
    res.send(allauthorname)
}


module.exports.createauthors= createauthors
module.exports.getBookData= getBookData
module.exports.createBooks= createBooks
module.exports.getIdByauthor=getIdByauthor

module.exports.findAndUpdate= findAndUpdate
module.exports.bookAndauthor= bookAndauthor
