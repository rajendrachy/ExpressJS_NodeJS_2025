const express = require('express');
const path = require('path');
const fs = require('fs');


const router = express.Router();

router.get('/products', (req, res) => {
  //res.send('Send product');
  console.log("The dir name is: ", __dirname);

  res.sendFile(path.join(__dirname, '../product.json'));
})


router.get('/products/:category/:id', (req, res) => {
        const cg = req.params.category;
        const id = req.params.id;
      //console.log(id);
        // res.send(`The cata ${cg} id = ${id}`);



  fs.readFile(__dirname + '/../product.json', 'utf-8', (err, data) => {
      console.log(data);
      const item = JSON.parse(data);
      console.log(item);


      item.forEach((val) => {
       if(val.category == cg && val.id == id) {
          console.log(val.name);
          res.send(val.name);
       }
      })
  })
})




module.exports = router;


