const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
// const UserController= require("../controllers/userController")
const BookController= require("../controllers/BookControllers")
const authorControllers= require("../controllers/authorControllers")
const bookModel= require("../models/bookModel")
const authorModel= require("../models/authorModel")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
    
router.post("/createbooks",BookController.createBooks)

router.post("/createauthors",authorControllers.createauthors)
router.post("/getBookData",BookController.getBookData)
router.post("/getIdByauthor",BookController.getIdByauthor)
router.post("/findAndUpdate",BookController.findAndUpdate)
router.post("/bookAndauthor",BookController.bookAndauthor)

module.exports = router;
// Write Preview