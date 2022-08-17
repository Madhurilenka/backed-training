const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
// const UserController= require("../controllers/userController")
const BookController= require("../controllers/BookController")
// const userbook= require("../models/bookModel")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
    // router.get("/getUsersData", BookController.getUsersData)

router.post("/createBooks", BookController.createBooks  )

router.get("/getBooksData", BookController.getBooksData)
router.get('/getBooksInYear',BookController.getBooksInYear)
router.get('/getParticularBook',BookController.getParticularBook)
router.get('/getXINRBooks',BookController.getXINRBooks)
router.get('/getRandomBooks',BookController.getRandomBooks)


module.exports = router;
// Write Preview