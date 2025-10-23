// to import the env file
require("dotenv").config();
// to get or import the user model from user.js beacuse it has been exported
const User = require("../models/user");
// to import byrptjs to hash user password
const bcrypt = require("bcryptjs");
// to install JWT to enable token for register and login
const jwt = require("jsonwebtoken");

// controller to register/signup
const register = async (req, res) => {
  try {
    const { email, password, repeatPassword } = req.body; //.body is where the user credentials saves temporarily before going to the database. async is being used because we want to fetch.
    if (password !== repeatPassword) {
      res.status(406).json({ message: "Password Mismatch" });
    }
    const salt = await bcrypt.genSalt(10); // level of hashing
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await User.create({ email, password: hashedPassword }); // because we're creating a new account

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "3d", // Note that the syntax for creating JWT which is used here is jwt.sign(payload, secret, options), Payload is the data you want to store inside the token
    });

    // send a success response with status 201, returning the user's info and a success mesage
    res.status(201).json({ message: "Registration was succesful", user, token });
  } catch (err) {
    // catch error is any
    res.status(400).json({ error: err.message });
  }
};

// CONTROLLER FOR LOGIN/SIGN IN

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      res.status(401).json({ message: "User does not exist" });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password); // TO compare hashed password
    if (!isPasswordMatch) {
      res.status(401).json({ message: "Wrong Password", user });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "3d",
    });
    res.status(200).json({ message: "Login was successfull", user, token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Controller to logout an existing user
const logout = async (req, res) => {
  try {
    // Since JWTs are stateless, we cant truly dete them on the backend
    // What we can do is simply tell the client to delete their copy
    // You can also implement token blacklisting if needed in the future

    res.status(200).json({ message: "Logout Successful" });
  } catch (error) {}
};

// Controller To get all the registered users in the db and note that it works with the auth.js in the middleware
const getUser = (req, res) => {
  const { userId } = req.user;
  res.status(200).json({
    id: userId,
  });
};

module.exports = { register, login, getUser, logout };
