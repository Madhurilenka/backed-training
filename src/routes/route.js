const express = require('express');
const module1 = require('../logger/logger');
const module2 = require('../util/helper');
const module3 =require('../validator/formatter');
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log(" Welcome to my application.I am madhuri lenka and a part of FunctionUp plutonium cohort")
    //  FunctionUp.welcome()
    module1.welcome()
    module2.Date()
    module2.Month()
    module2.Info()
    module3.xyz()
    module3.pqr()
    module3.abc()
    





    res.send("my second aasignment")

});





module.exports = router;

