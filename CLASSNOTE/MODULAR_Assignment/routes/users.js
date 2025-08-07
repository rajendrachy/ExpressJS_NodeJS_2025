const express = require('express');
const path = require('path');
const fs = require('fs');

const router = express.Router();

router.get('/', (req, res) => {
  res.send("Hello !")
})


router.get('/user', (req, res)=> {
  res.sendFile(path.join(__dirname , '../dummy.json'));
})


router.get('/user/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);

    fs.readFile(__dirname + '/../dummy.json', 'utf-8', (err1, data1) => {
            console.log(data1);
            const item = JSON.parse(data1);
            console.log(item);

            item.forEach((val) => {
                if(val.id == id) {
                  console.log(val.user);
                  res.send(val.user);
                }
            })
    })


})
module.exports = router;



