// const express = require('express');
// const fs = require('fs');
// const path = require('path');



// const app = express();
// const PORT = 3000;




// //------ Middleware to parse form data ----FORM_DATA_PARSE------
// app.use(express.urlencoded({ extended: false }));




// // GET route to serve => login.html
// app.get('/login', (req, res) => {
//     res.sendFile(path.join(__dirname , 'login.html'));
// });






// // POST route to handle login submission
// app.post('/login', (req, res) => {
//     let arr = [];

//     // Read existing data (if any)
//     fs.readFile('./data.json', 'utf-8', (err, data) => {
//         if (!err && data.length > 0) {
//             arr = JSON.parse(data);
//         }

//         arr.push(req.body); // req.body = { username: '...', password: '...' }

//         // Save new data
//         fs.writeFile('./data.json', JSON.stringify(arr, null, 2), (err) => {
//             if (!err) {
//                 res.send('Login data saved successfully.');
//             } else {
//                 res.status(500).send('Error saving data.');
//             }
//         });
//     });
// });






// // Start server
// app.listen(PORT, () => {
//     console.log(`Server running at http://localhost:${PORT}`);
// });















//-----------Practicing--------------------------
// const express = require('express');
// const path = require('path');
// const fs = require('fs');

// const app = express();


// app.use(express.urlencoded());



// app.get('/', (req, res) => {
//     res.send("This is homePage");
// })



// app.get('/log', (req, res) => {
//     res.sendFile(path.join(__dirname, 'login.html'));
// })





// app.post('/login', (req, res) => {
//  let arr = [];

// fs.readFile('./data.json', 'utf-8', (err, data) => {
//           if(!err && data.length != 0) {
//             console.log(data);
//             arr = JSON.parse(data);
//             console.log(arr);
//           }

//         arr.push(req.body);

       
//    console.log("The req.body is", req.body);



//     fs.writeFile('./data.json', JSON.stringify(arr), (err) => {
//       console.log("save success");
//     })

//  })
// })



// app.listen(3000, () => {
//     console.log(`Server started : http://localhost:3000`);
// })













