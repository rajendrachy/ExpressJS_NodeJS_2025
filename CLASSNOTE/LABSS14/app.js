// const express = require('express');
// const app = express();

// const userRoute = require('./routes/user');

// app.use('/', userRoute);  

// const port = 3000;
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });









const express = require('express');
const path = require('path');
const routerPath = require('./routes/user');

const app = express();


app.use('/', routerPath);


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
})


