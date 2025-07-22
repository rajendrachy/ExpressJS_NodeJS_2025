// Ques2
// Task 1: Create a Node.js HTTP server that listens on port 3000.

// Task 2: On visiting the root /, the server should display four HTML forms,(these html page contain beautiful css), each pointing to a different endpoint:

// /add

// /sub

// /mul

// /div

// Each form must have:

// Two input fields: num1 and num2

// One submit button

// Method should be GET for /add,/sub
// Method should be POST for /mul,/div

// Create a custom module named calculate.js that exports four functions:


// add(a, b)
// sub(a, b)
// mul(a, b)
// div(a, b)
// In your main server file:

// Route based on /add, /sub, /mul, /div

// Use the corresponding function from the custom module and send the result as a response:

// eg send response like these (Result: 10)

// For division:

// If num2 is 0, return:

// Error: Cannot divide by zero.
// If any input is missing or invalid (non-number), return:

// Error: Invalid input.









// const express = require('express');
// const path = require('path');
// const { add, sub, mul, div } = require('./calculate');

// const app = express();
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));

// // Serve index.html
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });


// // Handle GET routes
// app.get('/add', (req, res) => {
//   const a = parseFloat(req.query.num1);
//   const b = parseFloat(req.query.num2);
//   const result = isNaN(a) || isNaN(b) ? 'Error: Invalid input.' : `Result: ${add(a, b)}`;
//   res.send(`<h2>${result}</h2><a href="/">Back</a>`);
// });

// app.get('/sub', (req, res) => {
//   const a = parseFloat(req.query.num1);
//   const b = parseFloat(req.query.num2);
//   const result = isNaN(a) || isNaN(b) ? 'Error: Invalid input.' : `Result: ${sub(a, b)}`;
//   res.send(`<h2>${result}</h2><a href="/">Back</a>`);
// });

// // Handle POST routes
// app.post('/mul', (req, res) => {
//   const a = parseFloat(req.body.num1);
//   const b = parseFloat(req.body.num2);
//   const result = isNaN(a) || isNaN(b) ? 'Error: Invalid input.' : `Result: ${mul(a, b)}`;
//   res.send(`<h2>${result}</h2><a href="/">Back</a>`);
// });

// app.post('/div', (req, res) => {
//   const a = parseFloat(req.body.num1);
//   const b = parseFloat(req.body.num2);
//   let result;
//   if (isNaN(a) || isNaN(b)) result = 'Error: Invalid input.';
//   else result = div(a, b);
//   res.send(`<h2>${result}</h2><a href="/">Back</a>`);
// });

// // Start
// app.listen(3000, () => {
//   console.log('Server running at http://localhost:3000');
// });





