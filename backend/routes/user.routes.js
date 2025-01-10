const express = require("express");
const { body, validationResult } = require("express-validator");
const userController = require("../controllers/user.controller");
const authMiddleware = require("../middleware/auth.middleware");
const router = express.Router();

// Middleware to handle validation errors
const validateRequest = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

// User registration route
router.post(
    "/register",
    [
        body("fullname.firstname")
            .trim()
            .notEmpty()
            .withMessage("First name is required")
            .isLength({ min: 3 })
            .withMessage("First name must be at least 3 characters long"),
        body("fullname.lastname")
            .trim()
            .notEmpty()
            .withMessage("Last name is required")
            .isLength({ min: 3 })
            .withMessage("Last name must be at least 3 characters long"),
        body("email")
            .trim()
            .isEmail()
            .withMessage("Invalid email address"),
        body("password")
            .trim()
            .isLength({ min: 8 })
            .withMessage("Password must be at least 8 characters long")
            .matches(/\d/)
            .withMessage("Password must contain at least one number")
            .matches(/[A-Z]/)
            .withMessage("Password must contain at least one uppercase letter")
            .matches(/[a-z]/)
            .withMessage("Password must contain at least one lowercase letter"),
    ],
    validateRequest, // Handle validation errors
    userController.registerUser
);

// User login route
router.post(
    "/login",
    [
        body("email")
            .trim()
            .isEmail()
            .withMessage("Invalid email address"),
        body("password")
            .trim()
            .isLength({ min: 8 })
            .withMessage("Password must be at least 8 characters long"),
    ],
    validateRequest, // Handle validation errors
    userController.loginUser
);

// User profile route
router.get("/profile", authMiddleware.authUser, userController.getUserProfile);

// User logout route
router.get("/logout", authMiddleware.authUser, userController.logoutUser);

module.exports = router;
