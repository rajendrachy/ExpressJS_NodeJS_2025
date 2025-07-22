const express = require('express');
const app = express();

const userRoute = require('./routes/user');

app.use('/', userRoute);  

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
