const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
   res.send("Home page of Greeting");

})



router.get('/gree', (req, res) => {
  const lan = req.query.lan;
  console.log("first", lan);
  let message;


  switch (lan) {
    case 'en':
      message = 'Hello';
      //console.log("second", lang.message);
      break;
    case 'fr':
      message = 'Bonjour';
      break;
    case 'hi':
      message = 'Namaste';
      break;
    default:
      message = 'Hello (Default)';
  }

  res.send(message);
});


module.exports = router;








