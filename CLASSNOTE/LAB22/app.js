const express = require('express');
const app = express();
const postRoute = require('./routes/posts');
const comRoute = require('./routes/comments');


const PORT = 3000;
app.use('/', postRoute);
app.use('/posts', postRoute);

app.use('/', comRoute);
app.use('/comments', comRoute);

app.listen(PORT, () => {
  console.log(`Server run in port http://localhost:${PORT}`);
})













