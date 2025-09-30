const express = require("express");

const mongoose = require("mongoose"); //import mongoose

const app = express(); // here, we've started the server

const port = 1010; // give a port number to the server

const start = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://iamdyclef_db_user:UsLY7wSqAYaPC56e@cluster0.cknkimp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Database Connected");

    await app.listen(port);
    console.log(`server is running on PORT ${port}`);
  } catch (error) {
    console.error("Unable to connect to Database");
  }
};
start();

// iamdyclef_db_user
// UsLY7wSqAYaPC56e
// mongodb+srv://iamdyclef_db_user:UsLY7wSqAYaPC56e@cluster0.cknkimp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
