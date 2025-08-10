const express = require('express');
const app = express();
const morningRoute = require('./routes/morning');
const eveningRoute = require('./routes/evening');

// Route: /time-check
app.get('/time-check', (req, res) => {
  const hour = new Date().getHours();

  if (hour < 12) {
    res.redirect('/morning'); // Express uses 302 by default
  } else {
    res.redirect('/evening');
  }
});

app.use('/morning', morningRoute);
app.use('/evening', eveningRoute);

// 404 Handler
// app.use((req, res) => {
//   res.status(404).send('404 Not Found');
// });


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});















