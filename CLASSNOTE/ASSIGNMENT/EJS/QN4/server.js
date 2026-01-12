const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => res.send("Home Page"));

app.get("/val", (req, res, next) => {
  next({ type: "VALIDATION", statusCode: 400, message: "Invalid input" });
});


app.get("/crash", (req, res, next) => {
  throw new Error("Simulated server crash");

  
});

app.use((req, res, next) => {
  next({ type: "NOT_FOUND", statusCode: 404, message: "Page not found" });
});

app.use((err, req, res, next) => {
  const errorData = {
    errorType: err.type || "SERVER_ERROR",
    statusCode: err.statusCode || 500,
    message: err.message || "Something went wrong",
    timestamp: new Date(),
    requestUrl: req.originalUrl
  };

  res.status(errorData.statusCode).render("error-layout", { errorData });
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});


