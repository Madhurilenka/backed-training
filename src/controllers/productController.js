const productname =require("../models/productModel")

const Createproduct=async function(req,res){

    let product =req.body
    let productData = await productname.create(product)
    res.send({data:productData})

}

  module.exports.Createproduct=Createproduct