const jwt = require("jsonwebtoken")
const {jwt_user} = require("../config") 
function userMiddleWare(req,res,next){
    const token = req.headers.token
    try{
        const user = jwt.verify(token,jwt_user)
        req.userId = user.userId
        next()
    }catch(e){
        res.json({
            message : "invalid JWT"
        })
    }
}

module.exports = {
    userMiddleWare : userMiddleWare
}