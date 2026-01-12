const express = require('express');
const app = express();
const proRouter = require('./routes/products');


app.use('/', proRouter);
app.use('/products', proRouter);

app.listen(3000, () => {
  console.log("server started");
})



