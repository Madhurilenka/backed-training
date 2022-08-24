const authorModel = require("../models/newAuthor")
const bookModel= require("../models/newBook")
const bookpublisher=require("../models/newPublisher")

const createBook= async function (req, res) {
    let book = req.body
    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}

const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}

const detailsofids= async function(req,res){
    let data = req.body
    let author = req.body.author
    let publisher = req.body.publisher
    let authorid = await authorModel.find({ _id: author })
    let publisherid = await bookpublisher.find({ _id: publisher })
    if (!author) {
        res.send("Author ID is required.")
    }
    else if (!authorid[0]) {
        res.send("Not a valid author ID.")
    }
    else if (!publisher) {
        res.send("Publisher ID is required.")
    }
    else if (!publisherid[0]) {
        res.send("Not a valid publisher ID.")
    }
    else {
        let book = await bookModel.create(data)
        res.send(book)
    }

};
const getalldetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author').populate('publisher')
    res.send({data: specificBook})

}
//  const updateSpecificBook = async function(req,res){ 
// //get boooks by the publishers-penguin and harperCollins
//     let requiredPublisher =
//     await bookpublisher.find({$or:[{name:"penguin"},{name:"Harpercollins"}]},{_id:1})
    
//     let requiredPublisherIds=[]
//       for(let i=0;i<requiredPublisher.length;i++){
//         requiredPublisherIds.push(requiredPublisher[i]._id)
//       }

//       let updateBooks=await bookModel.updateMany({piblisher:{$in:requiredPublisher}},{isHardcovers:true},{new:true})
//        res.send({data:updateBooks})

    //get books by the publishers =penguin and harpercollins
    
//  }
 const abc = async function(req,res){
    let pubId = await bookpublisher.find({name:["Penguine","HarperCollins"]}).select({_id:1})
    // console.log(pubId)
    let updateBook = await bookModel.updateMany({publisher:pubId},{$set:{isHardCover:true}},{new:true})
    res.send({msg:updateBook})
}

const updateprice = async function(req,res){
    let authorId = await authorModel.find({ratings:{$gt:3.5}}).select({_id:1})
    let bookpriceUpdt = await bookModel.updateMany({author:authorId},{$inc:{price:+10}},{new:true})
    res.send({msg:bookpriceUpdt})
}



module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getalldetails = getalldetails

module.exports.detailsofids = detailsofids
module.exports.abc = abc
module.exports.updateprice = updateprice
