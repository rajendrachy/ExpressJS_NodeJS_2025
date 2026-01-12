const express = require("express")
const http = require("http")
const { Server } = require("socket.io")
const app = express()

const server = http.createServer(app)
const io = new Server(server)

app.use(express.static("public"))

let messages = []



let onlineUsers = {}




io.on("connection", (socket) => {
  console.log("socket connected...")

  io.emit("getAllMessages", messages)



  socket.on("newUser", (username) => {
    onlineUsers[socket.id] = username
    console.log(`${username} joined the chat`)

    io.emit("onlineUsers", Object.values(onlineUsers))
    socket.broadcast.emit("notify", `${username} joined chat`)
  })



  socket.on("sendMessage", (data) => {
    messages.push(data)
    io.emit("getAllMessages", messages)
  })







  socket.on("disconnect", () => {
    const name = onlineUsers[socket.id]
    console.log(`${name} disconnected`)

    delete onlineUsers[socket.id]
    io.emit("onlineUsers", Object.values(onlineUsers))

    if (name)
      socket.broadcast.emit("notify", `${name} left the chat`)
  })
})




server.listen(3000, () => {
  console.log("server started...")
})







