const express = require('express');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const app = express();
const secretKey = 'yourSecretKey';

app.use(cookieParser());

// Set token in cookie
app.get('/', (req, res) => {
  const token = jwt.sign({ username: "skdnnnnn" }, secretKey);
  res.cookie('demoTok', token);
  res.send("Token set in cookie.");
});

// Simple middleware with else + next()
function verifyToken(req, res, next) {
  const token = req.cookies.demoTok;

  
  if (!token) {
    res.send("Access denied. No token.");
  } else {
    const verified = jwt.verify(token, secretKey);
    req.user = verified;
    next();
  }
}

// Protected route
app.get('/protected', verifyToken, (req, res) => {
  res.send(`Hello ${req.user.username}, this is protected content.`);
});

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});






