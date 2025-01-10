const userModel = require("../models/user.model");

module.exports.createUser = async ({ firstname, lastname, email, password }) => {
    // Validate required fields
    if (!firstname || !email || !password) {
        throw new Error("All fields (firstname, email, password) are required.");
    }

    // Trim inputs for consistency
    firstname = firstname.trim();
    lastname = lastname ? lastname.trim() : null; // Optional lastname
    email = email.trim().toLowerCase();
    password = password.trim();

    // Validate email format
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
        throw new Error("Invalid email format.");
    }

    // Check if the email already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
        throw new Error("This email is already registered. Please login or use a different email.");
    }

    // Create the new user
    const user = await userModel.create({
        fullname: {
            firstname,
            lastname,
        },
        email,
        password,
    });

    return user;
};
