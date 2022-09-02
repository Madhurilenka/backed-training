const axios = require("axios");

const memePage = async function (a, b) {

    try {

        let data = a.query
        let option = {
            method: "post",
            url: `https://api.imgflip.com/caption_image?template_id=${a.query.id}&text0=${a.query.text0}&text1=${a.query.text1}&username=raj_8984&password=Rajesh006`

        }
        let result = await axios(option)
        b.status(200).send(result.data)

    } catch (error) {
        console.log(error)
        res.status(500).send({ msg: error.message })
    }
}

module.exports=memePage