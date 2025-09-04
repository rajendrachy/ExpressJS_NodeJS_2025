const express = require('express');

const app = express();
const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
       destination: (req, file, cb) => {
           cb(null, './uploads')
       },
       filename: (req, file, cb)  => {
        const newFileName = Date.now() + path.extname(file.originalname);

            cb(null, newFileName);

       }
})



const fileFilter = (req, file, cb) => {
        if(file.mimetype.startsWith('image/')) {
         cb(null, true); // true means image file upload allowed
        } else {
        cb(new Error ("Only images are allowed"), false); // false means other image not uploade
        }
}


const upload = multer({
  storage : storage, // or simply storage
  limits : {
    fieldSize: 1024 * 1024 *3, // 1 mb * 3 => 3mb
  }, 
  // fileFilter: fileFilter, // or simple fileFilter


})




app.post("/upload", upload.array('test-upload', 3), (req, res) => {


  // handle error if user submit without select file
  if(!req.files || req.files.length == 0) {
    return res.status(400).send(`No filse uploaded ${error.message}`)

  }


  console.log(req.files);
  res.send(req.files)
})


app.use((error, req, res, next) => { // for error handling
  if(error instanceof multer.MulterError){
   return res.status(400).send(`Multer error: ${error.message}`)
  } else if(error) {
     return res.status(500).send(`Something went wrong ${error.message}`)

  }
  next()

})



app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})




app.listen(3000, () => {
   console.log("Server Started..");
})




// multiple file using upload.fields[{}]









