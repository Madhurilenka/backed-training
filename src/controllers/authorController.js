const AuthorModel= require("../models/newAuthor")

const createAuthor= async function (req, res) {
    let author = req.body
    let authorCreated = await AuthorModel.create(author)
    res.send({data: authorCreated})
}

//  const AuthorDataByid=async function(req,res) {
//     // "62ffaab5e1edaf6a855afd12"=true condition
//     // "62ffbc2fdeeadc8f02a63275"=false condition
//     let data= req.body.data
    
//     let  authorids = await AuthorModel.findById(data)
//  console.log(authorids)

    // if(authorids){
    //      res.send({msg:"author",condition: true })
    // }
    // else  {
    //      res.send({msg:"id is wrong",condition:false})
    //     }





const getAuthorsData= async function (req, res) {
    let authors = await AuthorModel.find()
    res.send({data: authors})
}

module.exports.createAuthor= createAuthor
module.exports.getAuthorsData= getAuthorsData
// module.exports.AuthorDataByid= AuthorDataByid
