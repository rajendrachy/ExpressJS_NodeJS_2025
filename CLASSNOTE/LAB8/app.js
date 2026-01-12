// const express = require('express');
// const fs = require('fs');
// const path = require('path');

// const app = express();
// const PORT = 3000;


// // Middleware to parse form data
// app.use(express.urlencoded({ extended: false })); // Parses basic HTML form data into req.body

// // Serve CSS and static files from 'public' folder
// app.use(express.static('public'));



// //------------------ Without express.static():------------------------
// //------------ You’d have to manually write:-------------
// // app.get('/style.css', (req, res) => {
// //   res.sendFile(__dirname + '/public/style.css');
// // });







// // GET /
// app.get('/', (req, res) => { // In Express, the .sendFile() method automatically ends the response for you—you do not need to manually call res.end() afterward.

//     res.sendFile(path.join(__dirname, 'index.html'));
// });







// // ------------POST /submit--------------------
// app.post('/index', (req, res) => {
//     const name = req.body.name;
//     console.log(req.body); // Log the form data to the console
//     res.send(`Hello, ${name}`);
// });





// // ------ Server Started------------

// app.listen(PORT, () => {
//     console.log(`Server running at http://localhost:${PORT}`);
// });



















//------------Practicing--------------------------------

// const express = require('express');
// const fs = require('fs');
// const path = require('path');


// const app = express();



// app.use(express.urlencoded());
// app.use(express.static('public'));



// app.get('/', (req, res) => {
//       res.send('<h1>Home Page...</h1>')
// })




// app.get('/form', (req, res) => {
//    console.log("The dir name is", __dirname);
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));

// })






// app.post('/index', (req, res) => {
//      const name = req.body.name;
//      console.log(req.body);
//      res.end(`Hello ${name}`);
// })




// app.listen(3000, () => {
//     console.log("Server Started....");
// })













