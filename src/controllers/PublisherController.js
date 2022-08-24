const bookpublisher=require("../models/newPublisher")



const createPublisher= async function (req, res) {
    let book = req.body
    let bookCreated = await bookpublisher.create(book)
    res.send({data: bookCreated})
}

module.exports.createPublisher = createPublisher