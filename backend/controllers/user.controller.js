const userModel = require("../models/user.model");
const userService = require("../services/user.service");
const { check, validationResult } = require("express-validator");

module.exports.registerUser = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { fullname, email, password } = req.body;
    const hashedPassword = await userModel.hashPassword(password); // Correct static method call
    const user = await userService.createUser({
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      email,
      password: hashedPassword,
    });

    const token = user.generateAuthToken();
    res.status(201).json({ user, token });
  } catch (error) {
    next(error);
  }
};

