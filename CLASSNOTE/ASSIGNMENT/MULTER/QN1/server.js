// const express = require('express');
// const multer = require('multer');
// const path = require('path');

// const app = express();

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'index.html'));
// })


// const storage = multer.diskStorage({
//    destination: (req, file, cb) => {
//     cb(null, './uploads')
//    },
//    filename: (req, file, cb) => {
//     const newFile = Date.now() + path.extname(file.originalname)
//     cb(null, newFile)
//    }

// })




// const fileFilter = (req, file, cb) => {
//    if(file.mimetype.endsWith('png') || file.mimetype.endsWith('jpg')) {
//       cb(null, true)
//    } else {
//     cb(new Error("File not match"), false)
//    }
// }







// const upload = multer({
//   storage: storage,
//   fileFilter: fileFilter,
// })


// app.post("/upload", upload.single('test-upload'), (req, res) => {
//    res.send(req.file);
// })


// app.listen(3000, () => {
//   console.log("Server started");
// })










