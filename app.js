require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRouter = require("./routes/authRouter");
const movieRouter = require("./routes/movieRouter");
const bookmarkRouter = require("./routes/bookmarkRouter");

const app = express();
const port = process.env.PORT || 1010;

// ---- CORS config: allow only your frontend origin (safer than "*") ----
const corsOptions = {
  origin: "http://localhost:5173", // change to your frontend origin (or an array of allowed origins)
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "Accept",
    "X-Requested-With",
  ],
  credentials: true, // if you use cookies or authorize with credentials
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions)); // MUST come before routes

// optional: log incoming requests (good for debugging)
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use(express.json());

// your routes
app.use("/api/auth", authRouter);
app.use("/api/movie", movieRouter);
app.use("/api/bookmark", bookmarkRouter);

// connect & start server (don’t await app.listen — use callback)
const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database Connected");

    app.listen(port, () => {
      console.log(`Server is running on PORT ${port}`);
    });
  } catch (error) {
    console.error("Unable to connect to Database:", error);
    process.exit(1);
  }
};
start();
