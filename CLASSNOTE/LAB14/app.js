// const express = require('express');
// const app = express();

// const greetRoute = require('./routes/greet');

// app.use('/', greetRoute);

// const port = 3000;
// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });










const express = require("express");
const fs = require('fs');

const greeting = require("./routes/greet")

const app = express();

app.use('/', greeting);


app.listen(3000, () => {
  console.log("Server Started");
})






