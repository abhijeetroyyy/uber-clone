const userModel = require("../models/user.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

module.exports.authUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    if (!token) {
        return next(new Error("Unauthorized"))
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