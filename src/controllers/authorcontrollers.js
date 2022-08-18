const authorModel= require("../models/authorModel")

const createauthors= async function (req, res) {
    let data=req.body
    let authors= await authorModel.create(data)
    res.send({msg: authors})
}

module.exports.createauthors= createauthors