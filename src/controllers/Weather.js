let axios = require("axios")

let weatherOfcity = async function (req, res) {
    try {
        let cityNames = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let objArr = []
        for (let i = 0; i < cityNames.length; i++) {
            let objOfCity = { city: cityNames[i] }
            let options = {
                method: "get",
                url: `http://api.openweathermap.org/data/2.5/weather?q=${cityNames[i]}&appid=e8934b3a2de410bc6ef89c8ed95cb7f3`
            }
            let result = await axios(options)
            console.log(result.data.main.temp)
            objOfCity.temp = result.data.main.temp
            objArr.push(objOfCity)
        }
        let sort = objArr.sort((a, b) => { return a.temp - b.temp })
        console.log(sort)
        res.status(200).send({ msg: sort })

    } catch (error) {
        console.log(error)
        res.status(500).send({ msg: error.message })
    }
}

module.exports = weatherOfcity