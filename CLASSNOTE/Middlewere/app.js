const express = require('express');
const app = express();

// First middleware
app.use((req, res, next) => {
  console.log('Middleware 1');
  next(); // Move to next middleware
});

// Second middleware
app.use((req, res, next) => {
  console.log('Middleware 2');
  next(); // Move to route
});


// Route handler
app.get('/', (req, res) => {
  console.log("Hello");
  res.send('Hello from Express!');
});


// Start server
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});


