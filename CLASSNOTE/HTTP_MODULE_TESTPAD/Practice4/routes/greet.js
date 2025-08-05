const express = require('express');

const router = express.Router();

router.get('/greet', (req, res) => {
   //res.send("Greeting !");

   const lang = req.query.lang;
   let mess;

   switch(lang) {
    case 'Rahul':
      mess = "Hello, rahul!";
      break;
      default:
        mess = "Hello, Gest";
   }
   res.send(mess);
});


module.exports = router;

