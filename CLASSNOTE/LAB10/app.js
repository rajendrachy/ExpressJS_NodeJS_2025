const express = require('express');
const fs = require('fs');
const path = require('path');


const app = express();
const PORT = 3000;

// Middleware to parse form data
app.use(express.urlencoded({ extended: false }));


// GET route to serve login.html
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname , 'login.html'));
});



// POST route to handle login submission
app.post('/login', (req, res) => {
    let arr = [];

    // Read existing data (if any)
    fs.readFile('./data.json', 'utf-8', (err, data) => {
        if (!err && data.length > 0) {
            arr = JSON.parse(data);
        }

        arr.push(req.body); // req.body = { username: '...', password: '...' }

        // Save new data
        fs.writeFile('./data.json', JSON.stringify(arr, null, 2), (err) => {
            if (!err) {
                res.send('Login data saved successfully.');
            } else {
                res.status(500).send('Error saving data.');
            }
        });
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
