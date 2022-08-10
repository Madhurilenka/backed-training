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

// ===============================================


})
router.get('/movies',function(req,res) {
    let movies = ['KGF','RRR','PUSPA','Chakde india']
    res.send(movies)

})
router.get('/movies/:indexNumber',function(req,res){

   const Movies= ['Rang de Basanti','The shining', 'Lord of the rings', 'Batman begins',]
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
     res.send("The film is doesn't match any movie")
})

router.get("/sol1", function (req, res) {
    //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
    let arr= [1,2,3,5,6,7]
  
    let total = 0;
    for (var i in arr) {
        total =total+ arr[i];
    }
  
    let lastDigit= arr.pop()
    let consecutiveSum= lastDigit * (lastDigit+1) / 2
    let missingNumber= consecutiveSum - total
  
    res.send(  { data: missingNumber  }  );
  });
  router.get("/sol1", function (req, res) {
    //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
    let arr= [1,2,3,5,6,7]
  
    let total = 0;
    for (var i in arr) {
        total += arr[i];
    }
  
    let lastDigit= arr.pop()
    let consecutiveSum= lastDigit * (lastDigit+1) / 2
    let missingNumber= consecutiveSum - total
  
    res.send(  { data: missingNumber  }  );
  });
  
  
  
  router.get("/sol1", function (req, res) {
    //     //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
        let arr= [1,2,3,5,6,7]
        let missingNumber
        
        let sumArr=0;
        ///LOGIC WILL GO HERE 
        let lastNumber=arr[arr.length-1]
        for (let index = 0; index < arr.length; index++) {
            sumArr = sumArr+arr[index]; 
        }
        missingNumber=(lastNumber*(lastNumber+1))/2-sumArr   //n*n+1/2
    
        if(missingNumber==0){
            missingNumber="no any number is missing";
        }
        res.send(  { data: missingNumber  }  );
    });
  
  
  
  
  
  
  
  
  
  
  
  
  
    // -write an api which gives the missing number in an array of integers starting from anywhere….e.g [33, 34, 35, 37, 38]: 36 is missing
  router.get("/sol2", function (req, res) {
    //logic : sum of n consecutive numbers is [ n * (first + last) / 2  ]..so get sum of all numbers in array. now take sum of n consecutive numbers.. n would be length+1 as 1 number is missing
    let arr= [33, 34, 35, 37, 38]
    let len= arr.length
  
    let total = 0;
    for (var i in arr) {
        total += arr[i];
    }
  
    let firstDigit= arr[0]
    let lastDigit= arr.pop()
    let consecutiveSum= (len + 1) * (firstDigit+ lastDigit ) / 2
    let missingNumber= consecutiveSum - total
   
    res.send(  { data: missingNumber  }  );
  });


  router.get('/test-api',function(req,res){

    // let id= req.body.name
    // let pwd =req.body.branch
    console.log(req.body.branch)

res.send({ msg:"hii",status :"true"})

});
  
 
  
  
  
  
  
  
  
  
  
   
  
 
  
  
  
  
  
  
  
  
  
  
  
  
    // -write an api which gives the missing number in an array of integers starting from anywhere….e.g [33, 34, 35, 37, 38]: 36 is missing
  router.get("/sol2", function (req, res) {
    //logic : sum of n consecutive numbers is [ n * (first + last) / 2  ]..so get sum of all numbers in array. now take sum of n consecutive numbers.. n would be length+1 as 1 number is missing
    let arr= [33, 34, 35, 37, 38]
    let len= arr.length
  
    let total = 0;
    for (var i in arr) {
        total =total+ arr[i];
    }
  
    let firstDigit= arr[0]
    let lastDigit= arr.pop()
    let consecutiveSum= (len + 1) * (firstDigit+ lastDigit ) / 2
    let missingNumber= consecutiveSum - total
   
    res.send(  { data: missingNumber  }  );
  });
  
 


  
 

     

      module.exports=router