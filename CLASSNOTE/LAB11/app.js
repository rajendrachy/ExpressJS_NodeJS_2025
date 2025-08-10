const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();

//app.use(express.static(path.join(__dirname, 'public'), { extensions: ['html'] }));

app.use(express.static(path.join(__dirname, 'public'), {extensions: ['html']}));


// app.get('/about', (req, res) => {
//       res.sendFile(path.join(__dirname , './public/about.html'));
// })


// app.get('/contact', (req, res) => {
//   res.sendFile(path.join(__dirname, './public/contact.html'));
// })


// app.get('/services', (req, res) => {
//   res.sendFile(path.join(__dirname, './public/services.html'));
// })


const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server start...");
})










