const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');

const app = express();


app.use(session({
   name: "mySessionCookie",
   secret: "key that will sign",
   resave: false,
   saveUninitialized: false,

}))

app.get('/', (req, res) => {
  req.session.isAuth = true;
  console.log(req.session);
  console.log(req.session.id)
   res.send("Hello session");
})

app.listen(3000, () => {
  console.log("Server started");
})



