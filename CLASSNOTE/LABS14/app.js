const express = require('express');
const path = require('path');
const routerPath = require('./routes/blog')
const app = express();

app.use('/', routerPath);

app.listen(3000, () => {
  console.log('Server Started-----');
})






