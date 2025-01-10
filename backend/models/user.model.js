const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: [true, "First name is required"],
      minlength: [2, "First name must be at least 2 characters long"],
      trim: true,
    },
    lastname: {
      type: String,
      required: [true, "Last name is required"],
      minlength: [2, "Last name must be at least 2 characters long"],
      trim: true,
    },
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    trim: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})$/,
      "Please provide a valid email address",
    ],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [8, "Password must be at least 8 characters long"],
    select: false, // Prevent password from being returned by default
  },
  socketId: {
    type: String,
    default: null,
  },
});

// Static method to hash a password
userSchema.statics.hashPassword = async function (password) {
  const saltRounds = 10; // You can increase for better security
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  console.log(`Hashed password: ${hashedPassword}`);
  return hashedPassword;
};

// Instance method to generate a JWT token
userSchema.methods.generateAuthToken = function () {
  return jwt.sign(
    { _id: this._id },
    process.env.JWT_SECRET, // Use secure secrets in production
    { expiresIn: "24h" }
  );
};

// Instance method to compare a plain-text password with the hashed password
userSchema.methods.comparePassword = async function (password) {
  console.log(`Comparing password for user: ${this.email}`);
  const isMatch = await bcrypt.compare(password, this.password);
  if (!isMatch) {
    console.log(`Password comparison failed for user: ${this.email}`);
  }
  return isMatch;
};

// Pre-save middleware to hash password before saving
userSchema.pre("save", async function (next) {
  if (this.isModified("password") || this.isNew) {
    console.log(`Hashing password for user: ${this.email}`);
    this.password = await this.constructor.hashPassword(this.password.trim());
    console.log(`Hashed password: ${this.password}`);
  }
  next();
});

const userModel = mongoose.model("User", userSchema); // Collection name: User
module.exports = userModel;
