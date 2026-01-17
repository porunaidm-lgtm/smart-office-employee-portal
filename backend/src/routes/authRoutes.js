const express = require("express");
const router = express.Router();

const { login } = require("../controllers/authController");

// SINGLE LOGIN (Admin + Employee)
router.post("/login", login);

module.exports = router;
