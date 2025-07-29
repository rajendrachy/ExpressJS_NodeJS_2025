const app = require('express')();
const mongoose = require('mongoose');
const User = require('./models/userMl');
const http = require('http').Server(app);


// Connect to MongoDB
mongoose.connect("mongodb+srv://user:userss@cluster0.mryrym2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

// Once connected, add a user
mongoose.connection.once('open', () => {
  console.log("MongoDB connected");

  const user = new User({
    name: "Alice",
    email: "alice@example.com"
  });

  user.save().then(result => {
    console.log("User saved:", result);
  });
});

http.listen(3000, () => {
  console.log("Server running on port 3000");
});






