
const express = require('express');
const app = express();
const http = require('http').Server(app)
const path = require("path");
const { Socket } = require('socket.io');



const io = require('socket.io')(http)



app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})









var users = 0;

// socket connection step
io.on('connection', (socket) => {
   console.log("A User connected io");
  users++;

//   io.sockets.emit("broadcast", {message: users + "users connected"})
// // or only io.emit


socket.emit("newUserConnect", {message: "Welcome"});


socket.broadcast.emit("newUserConnect", {message : users + "User connected"});


   socket.on('disconnect', () => {
    console.log("A user disconnected io");

    users--;

   //  io.emit("broadcast", {message: users + "users connect"})




   socket.broadcast.emit("newUserConnect", {message: users + "User connected"});

   })
})






http.listen(3000, () => {
  console.log("Server started");
})








