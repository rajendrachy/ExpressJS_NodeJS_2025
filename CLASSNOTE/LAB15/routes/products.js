const express = require('express');
const router = express.Router();
const products = require('../products.json'); // Load the JSON file

// or use, 
// // Read products.json file once at the top
// const products = JSON.parse(fs.readFileSync('products.json', 'utf-8'));


// GET /products/category/:categoryName
router.get('/category/:categoryName', (req, res) => {
    const category = req.params.categoryName.toLowerCase();
    const maxPrice = parseFloat(req.query.maxPrice);

    const result = products.filter(product => 
        product.category.toLowerCase() === category &&
        (!maxPrice || product.price <= maxPrice)
    );

    res.json(result);
});

module.exports = router;


