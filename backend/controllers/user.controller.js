const userModel = require("../models/user.model");
const userService = require("../services/user.service"); // Optional: Custom user service
const { validationResult } = require("express-validator");

module.exports.registerUser = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, email, password } = req.body;
    const { firstname, lastname } = fullname;

    // Check if the user already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already registered with this email" });
    }

    // Create a new user
    const user = await userModel.create({
      fullname: { firstname, lastname },
      email,
      password: password.trim(),
    });

    // Generate an authentication token
    const token = user.generateAuthToken();

    // Return response with the user data and token
    const userData = {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
    };
    res.status(201).json({ user: userData, token });
  } catch (error) {
    console.error("Error during user registration:", error.message);
    next(error);
  }
};

module.exports.loginUser = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    // Find the user by email and include the password explicitly
    const user = await userModel.findOne({ email }).select("+password");
    if (!user) {
      console.log(`User not found for email: ${email}`);
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Compare passwords
    console.log(`Comparing password for user: ${email}`);
    console.log(`Plain password: ${password.trim()}`);
    console.log(`Hashed password: ${user.password}`);
    const isValidPassword = await user.comparePassword(password.trim());
    if (!isValidPassword) {
      console.log(`Password comparison failed for user: ${email}`);
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Generate JWT token
    const token = user.generateAuthToken();

    // Return user details (excluding sensitive data) and token
    const userData = {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
    };
    res.status(200).json({ user: userData, token });
  } catch (error) {
    console.error("Error during login:", error.message);
    next(error);
  }
};
