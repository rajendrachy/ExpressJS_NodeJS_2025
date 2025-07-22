const express = require('express');
const router = express.Router();

const users = [
  { id: '101', name: 'Alice', age: 25 },
  { id: '102', name: 'Bob', age: 30 },
  { id: '103', name: 'Charlie', age: 22 }
];

router.get('/user/:id', (req, res) => {
  const userId = req.params.id;

  const user = users.find(u => u.id === userId);

  if (user) {
    res.json(user); 
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

module.exports = router;




