const express = require('express');
const router = express.Router();



router.get('/comments', (req, res) => {
       res.send("All Comments");
})


router.get('/comments/:commentId', (req, res) => {
  const cId = req.params.commentId;
 res.send(`The comment is is : ${cId}`);

})
module.exports = router;
