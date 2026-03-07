const express = require("express");
const router = express.Router();
const { registerUser } = require("../Controllers/authController");
const { signup } = require("../Controllers/authController");

// Signup route
router.post("/signup", signup);

// Login route
router.post("/login", login);

module.exports = router;
