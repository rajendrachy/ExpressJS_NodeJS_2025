const express = require("express");
const path = require("path");
const app = express();

const baseRoute = require("./routes/baseRoute");

// Middleware to parse form data (optional, good for POST handling)
app.use(express.urlencoded({ extended: true }));

// Use base routes
app.use("/", baseRoute);

// Start server
app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});



