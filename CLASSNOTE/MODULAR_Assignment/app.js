const express = require('express');
const app = express();
const userRoute = require('./routes/users');

app.use('/', userRoute);
// app.use('/user', userRoute);


app.listen(3000, () => {
  console.log("Server started");
})


