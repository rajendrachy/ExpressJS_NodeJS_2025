const express = require('express');
const router = express.Router();


router.get('/blog/:year/:month/:slug', (req, res) => {
    const { year, month, slug } = req.params;

    res.send(`Viewing blog post from ${month}/${year}: "${slug}"`);
});

module.exports = router;


