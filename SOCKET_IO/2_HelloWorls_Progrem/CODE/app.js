
const express = require('express');
const app = express();
const http = require('http').Server(app)
const path = require("path");
const { Socket } = require('socket.io');



const io = require('socket.io')(http)



app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})






// socket connection step
io.on('connection', (socket) => {
   console.log("A User connected io");


   socket.on('disconnect', () => {
    console.log("A user disconnected io");
   })
})



http.listen(3000, () => {
  console.log("Server started");
})








