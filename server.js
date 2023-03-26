// Imports
const express = require("express");
const mongoose = require("mongoose");

// create express app
const app = express();

// Middlewares
app.use(express.json());

// Port
const port = process.env.PORT || 3000;

// Import Routes
const itemRoute = require("./routes");
app.use("/items", itemRoute);

// DB connection
mongoose
  .connect('mongodb://127.0.0.1:27017/CRUD', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Successfully connected to the database.');
  })
  .catch((error) => {
    console.log(error);
  });

// Starting server
app.listen(3000, () => {
  console.log("Server is starting on port", port)
});