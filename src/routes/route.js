const express = require('express'); 
const lodash =require("lodash");
// const module1 = require('../logger/logger');
// const module2 = require('../util/helper');
// const module3 =require('../validator/formatter');
const router = express.Router();
// const lodash =lodash.Router();

router.get('/test-me ', function(req, res) {
    // console.log(" Welcome to my application.I am madhuri lenka and a part of FunctionUp plutonium cohort")
    //  FunctionUp.welcome()
    // module1.welcome()
    // module2.Date()
    // module2.Month()
    // module2.Info()
    // module3.xyz()
    // module3.pqr()
    // module3.abc()
    
      let arr=["january","february","march","april","may","june","july","august","september","october","november","december"]
        let result=(lodash.chunk(arr,[size=3]))
               console.log(result)

           let arr1 =[1,3,5,7,9,11,13,15,17,19,]
           console.log(lodash.tail(arr1))


           let arr2=[1,2,3]
           let arr3= [2,3,4]          
           let arr4=[2,5,7]
           let arr5=[4,6,3,]
           let arr6=[3,5,8]
           console.log(lodash.union(arr2,arr3,arr4,arr5,arr6))


          let movies =[["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
          
          console.log(lodash.fromPairs(movies))


    





    res.send("my second aasignment 2 ")

});





module.exports = router;

