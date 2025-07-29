// app.js
const express = require('express');
const session = require('express-session');

const app = express();
const PORT = 3000;

// Session middleware
app.use(session({
  secret: 'count-secret',
  resave: false,
  saveUninitialized: false,
}));

// Route to count visits
app.get('/', (req, res) => {
  // Initialize counter if it doesn't exist
  if (!req.session.count) {
    req.session.count = 1;
  } else {
    req.session.count++;
  }

  res.send(`
    <h1>Simple Counter</h1>
    <p>You have refreshed this page <strong>${req.session.count}</strong> times.</p>
  `);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});


