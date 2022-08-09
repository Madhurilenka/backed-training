const { response } = require('express');
// const arr=require('lodash')
const express = require('express');
const abc = require('../introduction/intro')
// const logger = require('../logger/logger.js')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    // logger.welcome()

    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})

router.get('/student-details/:name', function(req, res){
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use any ways to print an object in Javascript, JSON stringify is one of them
    console.log("This is the request "+ JSON.stringify(requestParams))
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    
    res.send('Dummy response')
})
router.get('/movies',function(req,res) {
    let movies = ['bahubali','RRR','KGF2','The Warrior']
    res.send(movies)

})
router.get('/movies/:indexNumber',function(req,res){

   const Movies= ['Rang de Basanti','The shining', 'Lord of the rings', 'Batman begins','heathers','dangal']
    let requestParams = req.params
    let number = requestParams.indexNumber-1
        if (number<Movies.length)
            return res.send(Movies[number])
        else if(number==0)
            res.send("please enter a valid number btwn 1-6")
        else
            res.send ('the value is not exist in this index')


        })


router.get("/films", function(req, res){
  const films = [ {
      "id": 1,
      "name": "The Shining"
     }, {
      "id": 2,
      "name": "Incendies"
     }, {
      "id": 3,
      "name": "Rang de Basanti"
     }, {
      "id": 4,
      "name": "Finding Nemo"
     }]
     //send all the films
    res.send(films) 
})
router.get("/films/:filmId", function(req, res){
  const films = [ {
      "id": 1,
      "name": "The Shining"
     }, {
      "id": 2,
      "name": "Incendies"
     }, {
      "id": 3,
      "name": "Rang de Basanti"
     }, {
      "id": 4,
      "name": "Finding Nemo"
     }]
     let filmId = req.params.filmId
     //iterate all the films
     //search for a film whose id matches with the id recevied in request
     for(let i = 0; i < films.length; i++){
         let film = films[i]
         if(film.id == filmId) {
             //if there is a match return the response from here
             return res.send(film)
         }
     }
     //if there is no match give an error response
     res.send("The film id doesn't match any movie")
})

      router.get("/shoes", function(req, res){
        let queryParams = req.query
        let brand = queryParams.brand
        res.send("dummy response")
    })

      module.exports=router