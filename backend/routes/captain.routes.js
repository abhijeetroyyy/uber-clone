const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const captainController = require("../controllers/captain.controller");
const authmiddleware = require("../middleware/auth.middleware");

router.post("/register", [
    body('fullname.firstname').isLength({ min: 2 }).withMessage('First name must be at least 2 characters long'),
    body('fullname.lastname').isLength({ min: 2 }).withMessage('Last name must be at least 2 characters long'),
    body('email').isEmail().withMessage('Please provide a valid email address'),
    body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long'),
    body('vehicle.color').isLength({ min: 3 }).withMessage('Color must be at least 3 characters long'),
    body('vehicle.plate').isLength({ min: 3 }).withMessage('Plate must be at least 3 characters long'),
    body('vehicle.capacity').isInt({ min: 1 }).withMessage('Capacity must be at least 1'),
    body('vehicle.VehicleType').isIn(['car', 'bike', 'auto']).withMessage('Vehicle type must be either car, bike, or auto'),
], captainController.registerCaptain);

router.post("/login", [
    body('email').isEmail().withMessage('Please provide a valid email address'),
    body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long'),
], captainController.loginCaptain);

router.get("/profile", authmiddleware.authCaptain, captainController.getCaptainProfile);

router.post("/logout", authmiddleware.authCaptain, captainController.logoutCaptain);

module.exports = router;