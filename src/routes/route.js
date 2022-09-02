const express = require('express');
const router = express.Router();
const CowinController = require("../controllers/cowinController")
const weatherOfcity = require("../controllers/Weather")
const memePage =require("../controllers/meme")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states",cowinController .getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", cowinController.getByPin)

router.get("/cowin/getSession", CowinController.getSession)
router.get("/weatherOfcity", weatherOfcity)

router.post("/cowin/getOtp", CowinController.getOtp)
router.post("/memePage", memePage)


// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date



module.exports = router;