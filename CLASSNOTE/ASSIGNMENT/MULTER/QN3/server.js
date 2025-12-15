const express = require('express');
const path = require('path');
const multer = require('multer');
const fs = require('fs');



const app = express();


app.use(express.urlencoded({extended: true}))



const storage = multer.diskStorage({
  destination: (req, file, cb) => {
       cb(null, path.join(__dirname, 'uploads', 'resumes'))
  } ,
  filename: (req, file, cb) => {
    const newFile = Date.now() + path.extname(file.originalname);

     cb(null,newFile)

  },
})

  




const filterFile = (req, file, cb) => {
     if(file.mimetype.endsWith('/pdf')) {
      cb(null, true);
     } else {
      cb(null, false);
     }
}



const upload = multer({
  storage: storage,
  fileFilter: filterFile,
})



app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
})


app.post('/upload', upload.single('test-upload'), (req, res) => {
    
    let arr = [];

    fs.readFile('./data.json', 'utf-8', (err, data) => {
      if(!err && data.length !== 0) {
        arr = JSON.parse(data);
      }



      const entry = {
        ...req.body,
        file: req.file ? req.file.filename : null,
      };



      arr.push(entry);

      

      fs.writeFile("./data.json", JSON.stringify(arr, null, 2), (err) => {
        if(!err) {
          console.log("data save successfully");
          res.json({message: "Upload success", data: entry});
        }
      })
    })
})





app.listen(3000, () => {
  console.log("Server started");
})