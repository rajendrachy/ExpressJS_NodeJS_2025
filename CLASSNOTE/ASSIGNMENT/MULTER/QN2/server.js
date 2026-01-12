const express = require('express');
const path = require('path');
const multer = require('multer');

const app = express();


const storage = multer.diskStorage({
       destination: (req, file, cb) => {
           cb(null, './uploads');
       },
      filename: (req, file, cb)  => {
        const newFile = Date.now() + path.extname(file.originalname)
          cb(null, newFile);
      },
})






const filterFile = (req, file, cb) => {
  if(file.mimetype.endsWith('/jpg') || file.mimetype.endsWith('/png') || file.mimetype.endsWith('jpeg')) {
    cb(null, true);
  } else {
    cb(new Error("File type not match, error"), false);
  }

}

const upload = multer ({
  storage: storage,
 fileFilter: filterFile,

})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
})







app.post('/upload', upload.array('test-upload', 5), (req, res) => {
  console.log(req.files)
  res.json(req.files.filename)


})





app.use((err, req, res, next) => {
   if(err instanceof multer.MulterError) {
    return res.status(400).send("You can upload max 5 file only");
   } else if(err) {
    return res.status(500).send(`${err.message}`);
   }

   next();
})





app.listen(3000, () => {
  console.log("Server started");
})





