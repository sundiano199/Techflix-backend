require("dotenv").config();

const mongoose = require("mongoose");
// Bring in the model
const Movies = require("./models/movies");
// Then bring in movies.json
const moviesJson = require("./movies.json");

// Now we're trying to populate, delete, update movies.json API to the database
const populate = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database for API connected successfully");

    console.log("Deleting previous data...");
    await Movies.deleteMany();
    console.log("Previous Metod deleted succesfully");

    console.log("uploading new data");
    await Movies.create(moviesJson);
    console.log(moviesJson);
    

    console.log("Movies uploaded successfully to the databse");
    process.exit(0);
  } catch (error) {
    console.error({ Error: error.message });
    console.log("Unable to connect");
    process.exit(1);
  }
};

populate();
