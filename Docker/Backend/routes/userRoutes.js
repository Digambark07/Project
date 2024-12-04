const express = require("express");
const router = express.Router();
const { register, login, getUserData } = require("../controller/userController");

// POST route for user registration
router.post("/register", register);

// POST route for user login
router.post("/login", login);

// GET route for fetching user data
router.get("/get_user_data", getUserData);

module.exports = router;
