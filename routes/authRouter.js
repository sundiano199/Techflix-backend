// we'll bring in an internal key called router fro express
const express = require("express");
const register = require("../controllers/authController");
const router = express.Router();
router.post("/register", register)

module.exports = router;