// const express = require('express');
// const path = require('path');
// const fs = require('fs');

// const router = express.Router();

// router.get('/', (req, res) => {
//   res.send("Hello !")
// })


// router.get('/user', (req, res)=> {
//   res.sendFile(path.join(__dirname , '../dummy.json'));
// })



// router.get('/user/:id', (req, res) => {
//     const id = req.params.id;
//     console.log(id);

//     fs.readFile(__dirname + '/../dummy.json', 'utf-8', (err1, data1) => {
//             console.log(data1);
//             const item = JSON.parse(data1);
//             console.log(item);

//             item.forEach((val) => {
//                 if(val.id == id) {
//                   console.log(val.user);
//                   res.send(val.user);
//                 }
//             })
//     })


// })
// module.exports = router;








//---------Another practice------------------
const express = require('express');
const path = require('path');
const fs = require('fs');
const dummyArr = require('../dummy.json');


const router = express.Router();


router.get('/', (req, res) => {
       res.send("Hello !");
})


router.get('/user', (req, res) => {
  res.sendFile(path.join(__dirname, '../dummy.json'));
  console.log(dummyArr);

  const User = dummyArr.filter(val => val.user);
console.log("The user is: ", User);
   res.send(User);
})


router.get('/user/:id', (req, res) => {
  const id = req.params.id;
  console.log("The id is: ", id);


  fs.readFile(path.join(__dirname, '../dummy.json'), 'utf-8', (err, data) => {
    if(!err) {
      console.log(data);

      const item = JSON.parse(data);
      console.log("The item is: ", item);

      const result = item.filter(val => val.id == id);
      console.log("The result is: ", result);


const plainText = result
  .map(obj => `user: ${obj.user}, id: ${obj.id}`).join('\n');
 

console.log(plainText);
res.send(plainText);

    }
  })

})

module.exports = router;





