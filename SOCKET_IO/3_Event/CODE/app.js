
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


//    setTimeout(() => {
//   // socket.send("Sent message from server side by prereserved events");




// // emit is uset to create a custom event
//   socket.emit("myCustomEvent", {description: 'A custom message from server side'});


//    }, 3000)



socket.on("myCustomEvent", (data) =>{
   console.log("The data is: " , data.description);
})



   socket.on('disconnect', () => {
    console.log("A user disconnected io");
   })
})




http.listen(3000, () => {
  console.log("Server started");
})








