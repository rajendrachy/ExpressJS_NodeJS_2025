// const express = require('express');
// const app = express();
// const userRoute = require('./routes/users');

// app.use('/', userRoute);
// // app.use('/user', userRoute);


// app.listen(3000, () => {
//   console.log("Server started");
// })








//----------another practice---------
const express = require('express');
const path = require('path');
const userRoute = require('./routes/users');


const app = express();

app.use('/', userRoute);

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
})




