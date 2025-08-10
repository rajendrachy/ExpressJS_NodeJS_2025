// const express = require('express');
// const router = express.Router();

// const users = [
//   { id: '101', name: 'Alice', age: 25 },
//   { id: '102', name: 'Bob', age: 30 },
//   { id: '103', name: 'Charlie', age: 22 }
// ];

// router.get('/user/:id', (req, res) => {
//   const userId = req.params.id;

//   const user = users.find(u => u.id === userId);

//   if (user) {
//     res.json(user); 
//   } else {
//     res.status(404).json({ message: "User not found" });
//   }
// });

// module.exports = router;












const express = require('express');
const router = express.Router();


const users = [
  { id: '101', name: 'Alice', age: 25 },
  { id: '102', name: 'Bob', age: 30 },
  { id: '103', name: 'Charlie', age: 22 }
];



router.get('/user', (req, res) => {
  res.send(users);
  console.log(users);
})


router.get('/user/:id', (req, res) => {
  const id = req.params.id;
  console.log("User ID:", id);


  


  const user = users.find(u => u.id === id);
  console.log("Filtered User:", user);
if(user) {
  res.send(JSON.stringify(user));

  } 


  if(!user || user.length === 0) {
    res.status(404).json({ message: "User not found" });
  }
  
})

module.exports = router;
