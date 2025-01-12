const captainModel = require("../models/captain.model");

module.exports.createCaptain = async (firstname, lastname, email, password, color, plate, capacity, VehicleType) => {
    if (!firstname || !lastname || !email || !password || !color || !plate || !capacity || !VehicleType) {
        throw new Error("Please fill all the fields");
    }

    const captain = await captainModel.create({
        fullname: {
            firstname: firstname,
            lastname: lastname
        },
        email: email,
        password: password,
        vehicle: {
            color: color,
            plate: plate,
            capacity: capacity,
            VehicleType: VehicleType
        }
    });

    return captain;
};