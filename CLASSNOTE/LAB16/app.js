const express = require('express');
const authRoute = require('./routes/autoRoutes');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.use('/', authRoute);


app.listen(3000, () => {
  console.log("Server started!");
})










