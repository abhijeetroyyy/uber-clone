const blacklistTokenModel = require("../models/blacklistToken.model");
const captainModel = require("../models/captain.model");
const captainService = require("../services/captain.service");
const { check, validationResult } = require("express-validator");

module.exports.registerCaptain = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const {fullname,email,password,vehicle}=req.body;
    const isCaptainAlredyExist = await captainModel.findOne({email})
    if(isCaptainAlredyExist){
        return res.status(400).json({message:"Captain already exist"})
    }


    const hashedPassword = await captainModel.hashPassword(password);
    const captain = await captainService.createCaptain(
        fullname.firstname,
        fullname.lastname,
        email,
        hashedPassword,
        vehicle.color,
        vehicle.plate,
        vehicle.capacity,
        vehicle.VehicleType
    );

    const token = captain.generateAuthToken();
    res.status(201).json({ captain, token });
    
}

module.exports.loginCaptain = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    const captain = await captainModel.findOne({ email }).select("+password");
    if (!captain) {
        return res.status(401).json({ message: "Invalid email or password" });
    }

    const isValidPassword = await captain.comparePassword(password);
    if (!isValidPassword) {
        return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = captain.generateAuthToken();
    res.cookie("token", token, { httpOnly: true });
    res.status(200).json({ captain, token });
};

module.exports.getCaptainProfile = async (req, res, next) => {
    try {
        const captain = await captainModel.findById(req.captain._id);
        if (!captain) {
            return res.status(404).json({ message: "Captain not found" });
        }
        res.status(200).json({ captain });
    } catch (error) {
        next(error);
    }
};

module.exports.logoutCaptain = async (req, res, next) => {
    try {
        const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
        if (!token) {
            return res.status(400).json({ message: "No token provided" });
        }

        await blacklistTokenModel.create({ token });
        res.clearCookie("token");
        res.status(200).json({ message: "Logout successful" });
    } catch (error) {
        next(error);
    }
};