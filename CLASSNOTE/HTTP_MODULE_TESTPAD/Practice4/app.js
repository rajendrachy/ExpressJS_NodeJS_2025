const express = require('express');
const app = express();

const grRouter = require('./routes/greet');


app.use('/', grRouter);
app.use('/greet', grRouter);


app.listen(3000, () => {
  console.log("Server started...");
})


