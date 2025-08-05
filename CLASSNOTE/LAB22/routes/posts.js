const express = require('express');
const path = require('path');
const fs = require('fs');

const router = express.Router();

router.get('/posts', (req, res) => {
      res.send("All Posts");
})

router.get('/posts/:postid', (req, res) => {
  const postId = req.params.postid;

    res.send(`The postid id: ${postId}`);
})

module.exports = router;









