const captainModel = require("../models/captain.model")
const captainService = require("../services/captain.service")
const { check, validationResult } = require("express-validator")

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