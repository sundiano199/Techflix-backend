// we'll bring in an internal key called router fro express
const express = require("express");
const {
  register,
  login,
  getUser,
  logout,
} = require("../controllers/authController");
const auth = require("../middleware/auth");

const router = express.Router();
router.post("/register", register);
router.post("/login", login);
router.post("/user", auth, getUser);
router.post("/logout", auth, logout);

module.exports = router;
