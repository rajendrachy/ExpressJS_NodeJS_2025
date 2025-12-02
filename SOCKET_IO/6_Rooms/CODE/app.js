
const express = require('express');
const app = express();
const http = require('http').Server(app)
const path = require("path");
const { Socket } = require('socket.io');



const io = require('socket.io')(http)



app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})









var roomno = 1;
var full = 0;

io.on('connection', (socket) => {
   console.log("A User connected io");


   socket.join("room-" + roomno);

   io.sockets.in("room-" + roomno).emit("connectRoom", "U are connected to room no. " + roomno);

   full++;



   if(full >= 2) {
      full = 0;
      roomno++;
   }

   socket.on('disconnect', () => {
    console.log("A user disconnected io");



   })
})






http.listen(3000, () => {
  console.log("Server started");
})








