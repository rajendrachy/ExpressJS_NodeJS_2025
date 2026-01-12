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
















//-----------------According to the above question-------------------

// const http = require('http');
// const fs = require('fs');
// const path = require('path');
// const url = require('url');
// const querystring = require('querystring');
// const { add, sub, mul, div } = require('./calculate');

// const server = http.createServer((req, res) => {

//     // Serve index.html
//     if (req.url === '/root' && req.method === 'GET') {
//         fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
//             if (err) {
//                 res.writeHead(500, { 'Content-Type': 'text/plain' });
//                 res.end('Server Error');
//             } else {
//                 res.writeHead(200, { 'Content-Type': 'text/html' });
//                 res.end(data);
//             }
//         });
//     }

//     // ADD (GET)
//     else if (req.url.startsWith('/add') && req.method === 'GET') {
//         const query = url.parse(req.url, true).query;
//         const a = parseFloat(query.num1);
//         const b = parseFloat(query.num2);

//         if (isNaN(a) || isNaN(b)) {
//             res.end('Error: Invalid input.');
//         } else {
//             res.end(`Result: ${add(a, b)}`);
//         }
//     }


//     // SUB (GET)
//     else if (req.url.startsWith('/sub') && req.method === 'GET') {
//         const query = url.parse(req.url, true).query;
//         const a = parseFloat(query.num1);
//         const b = parseFloat(query.num2);

//         if (isNaN(a) || isNaN(b)) {
//             res.end('Error: Invalid input.');
//         } else {
//             res.end(`Result: ${sub(a, b)}`);
//         }
//     }

//     // MUL (POST)
//     else if (req.url === '/mul' && req.method === 'POST') {
//         let body = '';
//         req.on('data', chunk => { body += chunk.toString(); });
//         req.on('end', () => {
//             const data = querystring.parse(body);
//             const a = parseFloat(data.num1);
//             const b = parseFloat(data.num2);

//             if (isNaN(a) || isNaN(b)) {
//                 res.end('Error: Invalid input.');
//             } else {
//                 res.end(`Result: ${mul(a, b)}`);
//             }
//         });
//     }

//     // DIV (POST)
//     else if (req.url === '/div' && req.method === 'POST') {
//         let body = '';
//         req.on('data', chunk => { body += chunk.toString(); });
//         req.on('end', () => {
//             const data = querystring.parse(body);
//             const a = parseFloat(data.num1);
//             const b = parseFloat(data.num2);

//             if (isNaN(a) || isNaN(b)) {
//                 res.end('Error: Invalid input.');
//             } else if (b === 0) {
//                 res.end('Error: Cannot divide by zero.');
//             } else {
//                 res.end(`Result: ${div(a, b)}`);
//             }
//         });
//     }

//     // Not found
//     else {
//         res.writeHead(404, { 'Content-Type': 'text/plain' });
//         res.end('Not Found');
//     }
// });

// server.listen(3000, () => {
//     console.log('Server is running on http://localhost:3000');
// });





































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







