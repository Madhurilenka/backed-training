const JWT = require("jsonwebtoken");
// const userModel = require("../models/userModel");
//If no token is present in the request header return error

const mid1 = async function (req, res, next) {

    try {
        let token = req.headers["x-auth-token"];
        // if (!token) token = req.headers["x-auth-token"];
        if (!token) return res.status(401).send("Can't find Token. It must be present");
        // console.log(token);
        let decodedToken = JWT.verify(token, "functionup-plutonium-very-very-secret-key");
        if (!decodedToken)
            return res.status(500).send({ status: false, msg: "token is invalid" });
        req.token = decodedToken
        next()
    } catch (error) {
        res.status(500).send({ error: error.message })
    }


}

const isAuthorise = async function (req, res, next) {

    try {
        let userId = req.params.userId;
        let decordDetails = req.token.userId
        if (userId != decordDetails) {
            return res.status(403).send("Can't login with is this user. You have to modify the request user details.")
        }
        next()
    } catch (error) {
        res.status(500).send({ error: error.message })
    }

}




module.exports = { mid1, isAuthorise }
