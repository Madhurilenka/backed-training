const express = require('express');
const router = express.Router();
const momemt= require("moment");

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const PublisherController= require("../controllers/PublisherController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )

// router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createBook", bookController.createBook  )

router.post("/createPublisher", PublisherController.createPublisher )


router.post("/detailsofids", bookController.detailsofids)

router.get("/getalldetails", bookController.getalldetails)

router.put("/abc", bookController.abc)

router.put("/updateprice", bookController.updateprice)
module.exports = router;