const express = require('express');
const router = express.Router();

router.get('/greet', (req, res) => {
  const lang = req.query.lang;

  let message;

  switch (lang) {
    case 'en':
      message = 'Hello';
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




