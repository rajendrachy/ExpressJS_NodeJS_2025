const express = require('express');
const path = require("path");

const app = express();


app.set("view engine", "ejs");


app.get('/greeting', (req, res) => {
  res.render('greeting', {name:"John Due", isLoggedIn: true})
})



app.listen(3000, () => {
  console.log("Server started..");
})



















