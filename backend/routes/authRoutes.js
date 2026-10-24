const express = require("express");
const router = express.Router();
const { signup, login, resetPassword } = require("../Controllers/authController");

// Signup route
router.post("/signup", signup);

// Login route
router.post("/login", login);

// Reset password route
router.post("/reset-password", resetPassword);

module.exports = router;
