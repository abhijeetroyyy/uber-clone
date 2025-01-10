const userModel = require("../models/user.model");
const userService = require("../services/user.service");
const { validationResult } = require("express-validator");

module.exports.registerUser = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, email, password } = req.body;
    const { firstname, lastname } = fullname;

    const hashedPassword = await userModel.hashPassword(password);
    const user = await userService.createUser({
      firstname,
      lastname,
      email,
      password: hashedPassword,
    });

    const token = user.generateAuthToken();
    res.status(201).json({ user, token });
  } catch (error) {
    next(error);
  }
};


module.exports.loginUser = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let { email, password } = req.body;

    // Log the incoming email and password for debugging (trimmed)
    console.log("Login attempt with email:", email);
    console.log("Trimmed password input:", password.trim());

    // Check if user exists
    const user = await userModel.findOne({ email }).select("+password");
    if (!user) {
      console.error("User not found for email:", email);
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Log the retrieved user for debugging
    console.log("Retrieved user:", user);

    // Trim password to avoid whitespace issues
    password = password.trim();

    // Validate password
    const isValidPassword = await user.comparePassword(password);
    if (!isValidPassword) {
      console.error("Password validation failed for email:", email);
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Generate JWT token
    const token = user.generateAuthToken();
    console.log("JWT token generated for user:", user._id);

    // Return success response
    res.status(200).json({ user, token });
  } catch (error) {
    console.error("Error in loginUser:", error);
    next(error);
  }
};
