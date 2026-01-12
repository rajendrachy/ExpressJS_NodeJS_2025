// const express = require('express');
// const multer = require('multer');
// const path = require('path');
// const app = express();

// // Serve static files from "uploads" folder (so we can view uploaded files)
// app.use(express.static('uploads'));

// // Set up storage with multer.diskStorage
// const storage = multer.diskStorage({
//     // Set the destination folder for uploaded files
//     destination: function (req, file, cb) {
//         cb(null, 'uploads'); // upload files to "uploads/" folder
//     },
//     // Set a unique filename (with original extension)
//     filename: function (req, file, cb) {
//         const uniqueName = Date.now() + path.extname(file.originalname); // e.g., 162345123123.jpg
//         cb(null, uniqueName);
//     }
// });



// // Initialize multer with the custom storage
// const upload = multer({ storage: storage });

// // Serve the HTML form on the homepage
// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html');
// });

// // Handle file upload
// app.post('/upload', upload.array('test-upload', 2), (req, res) => {
//     console.log(req.files); // log uploaded file info

//     // Show uploaded files as image preview
//     const previews = req.files.map(file => {
//         return `<img src="/${file.filename}" width="200"><br>`;
//     }).join('');

//     res.send(`
//         <h2>Upload successful!</h2>
//         ${previews}
//         <a href="/">Upload more</a>
//     `);
// });

// // Start the server
// app.listen(3000, () => {
//     console.log('Server started on http://localhost:3000');
// });

















