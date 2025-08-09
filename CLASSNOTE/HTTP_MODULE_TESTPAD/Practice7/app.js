const express = require('express');
const path = require('path');
const fs = require('fs');
const movie = require('./movie.json');


const app = express();



app.get('/movies', (req, res) => {
   res.sendFile(path.join(__dirname, 'movie.json'));

   let gener = req.query;
   console.log(gener);

let year = req.query;


  // console.log(movie);
   

  let movi = movie.filter(val => val.genre == gener.gener && val.year == year.year);

console.log(movi);
res.send(movi);

})



app.listen(3000, () => {
  console.log("Server started");

})






