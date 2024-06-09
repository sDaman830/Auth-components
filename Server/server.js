require("dotenv").config();

const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const staticRouter = require("./routes/staticRouter");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// View engine setup
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// Use the router
app.use("/", staticRouter);

// MongoDB connection
const mongoURI = process.env.MONGO_URI;
console.log(mongoURI);
console.log("MONGO_URI:", mongoURI); // Add this line to debug if the environment variable is loaded correctly
if (!mongoURI) {
  console.error("MongoDB connection error: MONGO_URI is not defined");
  process.exit(1);
}

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
