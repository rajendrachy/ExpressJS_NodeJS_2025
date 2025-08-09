// Import the Express framework and create an Express application
const app = require('express')();

// Import Mongoose to connect and interact with MongoDB
const mongoose = require('mongoose');

// Import the User model (Mongoose schema) from the 'models' folder
const User = require('./models/userMl');

// Create a basic HTTP server using Node.js and attach the Express app to it
// This is useful if you plan to use WebSocket libraries like Socket.IO
const http = require('http').Server(app);


// Connect to MongoDB
mongoose.connect("mongodb+srv://user:userss@cluster0.mryrym2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.error("Connection failed:", err.message);
});






// Once connected, add a user
mongoose.connection.once('open', () => {
  console.log("MongoDB connected");

  const user = new User({
    name: "Alice",
    email: "alice@example.com",
    id: 23666
  });

  user.save().then(result => {
    console.log("User saved:", result);
  });
});





http.listen(3000, () => {
  console.log("Server running on port 3000");
});















