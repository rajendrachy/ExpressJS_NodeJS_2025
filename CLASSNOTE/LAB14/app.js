const express = require('express');
const app = express();

const greetRoute = require('./routes/greet');

app.use('/', greetRoute);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});





