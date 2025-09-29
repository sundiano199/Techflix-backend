const express = require("express")

const mongoose = require("mongoose") //import mongoose

const app = express(); // here, we've started the server

const port = 1010; // give a port number to the server

const start = () => {
    app.listen(port)
    console.log(`server is running on PORT ${port}`);
};
start();
