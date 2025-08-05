const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Good Morning!');
});

module.exports = router;
