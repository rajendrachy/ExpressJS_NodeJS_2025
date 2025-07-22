// import express from "express";
const express = require("express");
const app = express();


//-----------to use ejs-------------
app.set('view engine', 'ejs');


app.get("/", (req, res) => {
 res.render('home.ejs', {name: 'Rajendra Chaudhary', batch:'2023'});
})


app.listen(3000, () => {
  console.log("Server start");
})

