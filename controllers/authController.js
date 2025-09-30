// to get or import the user model from user.js beacuse it has been exported
const User = require("../models/user");
// controller to register/signup
const register = async (req, res) => {
  try {
    const { email, password, repeatPassword } = req.body; //.body is where the user credentials saves temporarily before going to the database. async is being used because we want to fetch.
    if (password !== repeatPassword) {
      res.status(406).json({ message: "Password Mismatch" });
    }
    const user = await User.create({ email, password });

    // response
    res.status(201).json({ message: "Registration was succesful", user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = register;
