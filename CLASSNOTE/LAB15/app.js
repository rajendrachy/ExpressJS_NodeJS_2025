const express = require('express');
const app = express();
const productRoutes = require('./routes/products');

const PORT = process.env.PORT || 3000;

app.use('/products', productRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

