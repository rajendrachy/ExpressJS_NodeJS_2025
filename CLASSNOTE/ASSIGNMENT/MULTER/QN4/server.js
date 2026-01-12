const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
})




const storage = multer.diskStorage({
  destination: (req, file, cb) => {
  cb(null, path.join(__dirname, 'uploads', 'products'));
  },
  filename: (req, file, cb) => {
    const newFile = Date.now() + path.extname(file.originalname);
      cb(null,newFile)
  },
})



const filterFile = (req, file, cb) => {
   if(file.mimetype.endsWith('/jpg') || file.mimetype.endsWith('/png')) {
    cb(null, true);
   } else {
    cb(new Error("File type not match"), false);
   }
}

const upload = multer({
storage: storage,
fileFilter: filterFile,
limits: {
  fileSize: 1024 * 1024 * 2,
}

})

app.post('/upload', upload.array('test-upload', 10), (req, res) => {
 console.log(req.files);
//   res.send(req.files[0])

 res.json({
    message: "Files uploaded successfully!",
    files: req.files.map(file => ({
      filePath: file.path,
      fileSize: `${(file.size / 1024).toFixed(2)} KB`
    }))

  });


})


app.use((error, req, res, next) => { // for error handling
  if(error instanceof multer.MulterError){
   return res.status(400).send(`File size must be 2 mb only: ${error.message}`)
  } else if(error) {
     return res.status(500).send(`Something went wrong ${error.message}`)

  }
  next()

})



app.listen(3000, () => {
  console.log("Server started");
})







