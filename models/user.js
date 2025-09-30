const mongoose = require("mongoose");
// import mongoose here , which is used to interact with the db and define data schema/model
const userSchema = new mongoose.Schema({
    //define the email field for users schema, which stores the user's
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("User", userSchema)