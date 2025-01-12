const userModel = require("../models/user.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
const captainModel = require("../models/captain.model");
const blacklistTokenModel = require("../models/blacklistToken.model");

module.exports.authUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    if (!token) {
        return next(new Error("Unauthorized"))
    }
    const isBlacklisted =  await blacklistTokenModel.findOne({token:token})
    if(isBlacklisted){
        return res.status(401).json({message:"Unauthorisez"})
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        const user = await userModel.findById(decoded._id)
        if (!user) {
            return res.status(401).json({
                message: "User not found"
            })
        }
        req.user = user;
        return next();
    }
    catch (error) {
        return res.status(401).json({
            message: "Invalid token"
        })
    }
}
module.exports.authCaptain = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    if (!token) {
        return next(new Error("Unauthorized"))
    }
    const isBlacklisted =  await blacklistTokenModel.findOne({token:token})
    if(isBlacklisted){
        return res.status(401).json({message:"Unauthorisez"})
    }
    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        const captain = await captainModel.findById(decoded._id)
        if (!captain) {
            return res.status(401).json({
                message: "captain not found"
            })
        }
        req.captain = captain;
        return next();
    }
    catch (error) {
        return res.status(401).json({
            message: "Invalid token"
        })
    }
}